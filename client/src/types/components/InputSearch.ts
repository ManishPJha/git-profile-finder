// import { IRepository } from '@_types/features/repositories';
// import { IUser } from '@_types/features/user';
// import { AsyncThunk } from '@reduxjs/toolkit';
// import { AppDispatch } from 'client/src/store';

import { Dispatch, SetStateAction } from 'react';

export interface InputSearchPropsTypes {
    // dispatch: AppDispatch;
    // getUserByUserName: AsyncThunk<IUser, string, any>;
    // getRepositoriesByUsername: AsyncThunk<IRepository[], string, any>;
    // setSearchName: Dispatch<SetStateAction<string>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}
