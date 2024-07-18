import type { IUser, IUserState } from '@_types/features/user';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAPI } from '@utils/api-helper';
import { getErrorMessage } from '@utils/get-error-message';
import { transformUserResponse } from '@utils/nomalize/user';
import { PURGE } from 'redux-persist';

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
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return transformUserResponse(data);
        } catch (error) {
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
            state.user = action.payload;
        },
        setSearchName: (state, action: PayloadAction<string>) => {
            state.searchName = action.payload;
        },
        resetSearchName: (state) => {
            state.searchName = initState.searchName;
        },
        reset: () => initState,
    },
    extraReducers: (builder) => {
        builder.addCase(getUserByUserName.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        });
        builder.addCase(getUserByUserName.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.error = '';
        });
        builder.addCase(getUserByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message || '';
        });
        builder.addCase(PURGE, () => initState);
    },
});

export default userSlice;
