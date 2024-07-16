import { IRepository } from '@_types/features/repositories';
import { IUser } from '@_types/features/user';
import { AsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from 'client/src/store';

export interface InputSearchPropsTypes {
    dispatch: AppDispatch;
    getUserByUserName: AsyncThunk<IUser, string, any>;
    getRepositoriesByUsername: AsyncThunk<IRepository[], string, any>;
}
