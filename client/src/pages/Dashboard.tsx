import InputSearch from '@components/InputSearch';
import ProfileDetails from '@components/Profile-Details';
import { useEffect, useState } from 'react';

import { IUser } from '@_types/features/user';
import { getUserByUserName } from '@features/user';
import { useDispatch } from 'react-redux';
import { useAppState, useReduxActions } from '../hooks/useReduxActions';
import { AppDispatch } from '../store';

const Dashboard = () => {
    const { isLoading, isError, error, user } = useAppState((state) => state.user);

    const [profile, setProfile] = useState<IUser | null>(null);

    const { reset } = useReduxActions();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserByUserName('ManishPJha'));
        return () => {
            reset();
        };
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            // save user data to local storage or Redux store
            // console.log('user response', JSON.stringify(user));
            setProfile(user);
        }
    }, [user]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error}</div>;

    return (
        <div>
            <InputSearch />
            {profile && <ProfileDetails profile={profile} />}
        </div>
    );
};

export default Dashboard;
