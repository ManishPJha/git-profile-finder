import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IRepository, IRepositoryState } from '@_types/features/repositories';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformRepositoriesResponse } from '@utils/nomalize/repository';

const initState: IRepositoryState = {
    repositories: [],
    repository: null,
    isLoading: false,
    isError: false,
    error: '',
};

export const getRepositoriesByUsername = createAsyncThunk(
    'getRepositoriesByUsername',
    async (userName: string, { getState }) => {
        try {
            const state = await getState();

            const response = await fetchAPI(`/api/users/${userName}/repos`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            return transformRepositoriesResponse(data);
        } catch (error) {
            console.log('🚀 ~ getRepositoriesByUsername ~ error:', getErrorMessage(error));
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
    },
});

export default repositorySlice;
