import { useDispatch } from 'react-redux';

import type { IRepositoryArgs } from '@_types/features/repositories';
import { getRepositoriesByUsername } from '@features/repositories';
import { getUserByUserName } from '@features/user';
import { AppDispatch } from '../store';

const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        getUserByUserName: (userName: string) => dispatch(getUserByUserName(userName)),
        getRepositoriesByUsername: (data: IRepositoryArgs) =>
            dispatch(getRepositoriesByUsername(data)),
    };
};

export default useActions;
