import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import type {
    IRepository,
    IRepositoryArgs,
    IRepositoryState,
    PaginationQuery,
} from '@_types/features/repositories';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformRepositoriesResponse } from '@utils/nomalize/repository';
import { RootState } from '../store';

const initState: IRepositoryState = {
    repositories: [],
    repository: null,
    pagination: false,
    paginationQuery: {
        currentPage: null,
        pageLimit: null,
        totalPages: null,
        sort: 'created',
        direction: 'desc',
        hasNext: false,
    },
    isLoading: false,
    isError: false,
    error: '',
};

export const getRepositoriesByUsername = createAsyncThunk(
    'getRepositoriesByUsername',
    async ({ userName, currentPage, pageLimit }: IRepositoryArgs, { getState, dispatch }) => {
        try {
            const state = (await getState()) as RootState;

            const total_repositories = state.user.user?.public_repos as number;

            const page = currentPage || 1;
            const perPage = pageLimit || 5;

            const totalPages = Math.ceil(total_repositories / perPage);

            const payload = {
                currentPage: page,
                pageLimit: perPage,
                totalPages: totalPages,
                sort: 'created',
                direction: 'desc',
                hasNext: page < totalPages,
            };

            dispatch({ type: 'repository/setPagination', payload });

            const response = await fetchAPI(
                `/api/users/${userName}/repos?sort=created&direction=desc&page=${page}&per_page=${perPage}`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const transformedRepositories = transformRepositoriesResponse(data);

            return transformedRepositories;
        } catch (error) {
            console.log('🚀 ~ getRepositoriesByUsername ~ error:', getErrorMessage(error));
            // reset username to default on error
            // setTimeout(() => dispatch({ type: 'user/resetSearchName' }), 2000);
            throw new Error(getErrorMessage(error));
        }
    },
);

const repositorySlice = createSlice({
    name: 'repository',
    initialState: initState,
    reducers: {
        setRepository: (state, action: PayloadAction<IRepository>) => {
            return { ...state, repository: action.payload };
        },
        setPagination: (state, action: PayloadAction<PaginationQuery>) => {
            return { ...state, paginationQuery: action.payload };
        },
        resetRepository: () => initState,
    },
    extraReducers: (builder) => {
        builder.addCase(getRepositoriesByUsername.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
                error: null,
            };
        });
        builder.addCase(getRepositoriesByUsername.fulfilled, (state, action) => {
            const newRepositories = action.payload;

            const uniqueRepositories = Array.from(
                new Set([...state.repositories, ...newRepositories].map((repo) => repo.id)),
            ).map((id) =>
                [...state.repositories, ...newRepositories].find((repo) => repo.id === id),
            ) as IRepository[];

            return {
                ...state,
                repositories: uniqueRepositories,
                isLoading: false,
                isError: false,
                error: null,
            };
        });
        builder.addCase(getRepositoriesByUsername.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error.message!,
            };
        });
        builder.addCase(PURGE, () => initState);
    },
});

export default repositorySlice;
