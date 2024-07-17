import { useEffect, useMemo } from 'react';

import InputSearch from '@components/InputSearch';
import Loader from '@components/Loader';
import ProfileDetails from '@components/Profile-Details';
import RepositoryDetails from '@components/Repository-Details';
import useActions from '@hooks/useActions';
import { useAppState } from '@hooks/useReduxActions';

const Dashboard = () => {
    const { isLoading, isError, error, user, searchName } = useAppState((state) => state.user);
    const {
        isLoading: _isLoading,
        isError: _isError,
        error: _error,
        repositories,
    } = useAppState((state) => state.repository);

    const profile = useMemo(() => user, [user]);

    const { getUserByUserName, getRepositoriesByUsername } = useActions();

    useEffect(() => {
        getUserByUserName(searchName);
        getRepositoriesByUsername(searchName);
    }, [searchName]);

    useEffect(() => {
        console.log('💛 dashboard is mounted...');

        return () => console.log('🌊 dashboard is unmounted...');
    }, []);

    if (isLoading || _isLoading) return <Loader />;

    if (isError || _isError) return <div>Error: {error || _error}</div>;

    return (
        <>
            <InputSearch />
            <ProfileDetails profile={profile} />
            <RepositoryDetails repositories={repositories} />
        </>
    );
};

export default Dashboard;
