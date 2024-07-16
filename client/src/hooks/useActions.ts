import { getRepositoriesByUsername } from '@features/repositories';
import { getUserByUserName } from '@features/user';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        getUserByUserName: (userName: string) => dispatch(getUserByUserName(userName)),
        getRepositoriesByUsername: (userName: string) =>
            dispatch(getRepositoriesByUsername(userName)),
    };
};

export default useActions;
