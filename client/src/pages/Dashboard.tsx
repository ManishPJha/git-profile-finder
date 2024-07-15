import InputSearch from '@components/InputSearch';
import ProfileDetails from '@components/Profile-Details';
import { useEffect } from 'react';

import { getUserByUserName } from '@features/user';
import { useDispatch } from 'react-redux';
import { useAppState } from '../hooks/useReduxActions';
import { AppDispatch } from '../store';

const Dashboard = () => {
    const { isLoading, isError, error, user } = useAppState((state) => state.user);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserByUserName('ManishPJha'));
        console.log('API is being initialized...');
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            // save user data to local storage or Redux store
            console.log('user response', JSON.stringify(user));
        }
    }, [user]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error}</div>;

    return (
        <div>
            <InputSearch />
            <ProfileDetails />
        </div>
    );
};

export default Dashboard;
