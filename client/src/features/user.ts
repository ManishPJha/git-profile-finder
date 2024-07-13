import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { IUserState } from '@_types/features/user';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';

const initState: IUserState = {
    user: null,
    isLoading: false,
    isError: false,
    error: '',
};

export const getUserByUserName = createAsyncThunk('getUserByUserName', async (userName: string) => {
    try {
        const response = await fetchAPI(`/users/${userName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        getErrorMessage(error);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, user: action.payload };
        },
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
            console.log('🚀 ~ builder.addCase ~ action:', action.error);
            return {
                ...state,
                isLoading: false,
                isError: true,
                // error: getErrorMessage(action.error),
            };
        });
    },
});

export default userSlice;
