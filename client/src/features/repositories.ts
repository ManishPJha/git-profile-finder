import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import type { IRepository, IRepositoryState, PaginationQuery } from '@_types/features/repositories';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformRepositoriesResponse } from '@utils/nomalize/repository';
import { RootState } from '../store';

const initState: IRepositoryState = {
    repositories: [],
    repository: null,
    pagination: false,
    paginationQuery: {
        page: null,
        perPage: null,
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
    async (userName: string, { getState, dispatch }) => {
        try {
            const state = (await getState()) as RootState;

            const total_repositories = state.user.user?.public_repos;

            const page = 1;
            const perPage = 5;

            const response = await fetchAPI(
                `/api/users/${userName}/repos?sort=created&direction=desc&page=${page}&per_page=${perPage}`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return transformRepositoriesResponse(data);
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
        setPaginationTotal: (state, action: PayloadAction<PaginationQuery>) => {
            return { ...state, paginationQuery: action.payload };
        },
        reset: () => initState,
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
            return {
                ...state,
                repositories: action.payload,
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
