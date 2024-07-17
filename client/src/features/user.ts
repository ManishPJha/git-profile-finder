import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import type { IUser, IUserState } from '@_types/features/user';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformUserResponse } from '@utils/nomalize/user';

const initState: IUserState = {
    user: null,
    searchName: 'ManishPJha',
    isLoading: false,
    isError: false,
    error: '',
};

export const getUserByUserName = createAsyncThunk(
    'getUserByUserName',
    async (userName: string, { dispatch }) => {
        try {
            const response = await fetchAPI(`/api/users/${userName}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const transfomedResponse = transformUserResponse(data);

            return transfomedResponse;
        } catch (error) {
            console.log('🚀 ~ getUserByUserName ~ error:', getErrorMessage(error));
            // reset username to default on error
            setTimeout(() => dispatch({ type: 'user/resetSearchName' }), 2000);
            throw new Error(getErrorMessage(error));
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            return { ...state, user: action.payload };
        },
        setSearchName: (state, action: PayloadAction<string>) => {
            return { ...state, searchName: action.payload };
        },
        resetSearchName: (state) => {
            return { ...state, searchName: initState.searchName };
        },
        reset: () => initState,
    },
    extraReducers: (builder) => {
        builder.addCase(getUserByUserName.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
                error: null,
            };
        });
        builder.addCase(getUserByUserName.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isError: false,
                error: null,
            };
        });
        builder.addCase(getUserByUserName.rejected, (state, action) => {
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

export default userSlice;
