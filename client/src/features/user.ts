import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IUser, IUserState } from '@_types/features/user';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformUserResponse } from '@utils/nomalize/user';

const initState: IUserState = {
    user: null,
    isLoading: false,
    isError: false,
    error: '',
};

export const getUserByUserName = createAsyncThunk('getUserByUserName', async (userName: string) => {
    try {
        const response = await fetchAPI(`/api/users/${userName}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return transformUserResponse(data);
    } catch (error) {
        console.log('🚀 ~ getUserByUserName ~ error:', getErrorMessage(error));
        throw new Error(getErrorMessage(error));
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            return { ...state, user: action.payload };
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
    },
});

export default userSlice;
