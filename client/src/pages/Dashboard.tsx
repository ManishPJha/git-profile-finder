import { useEffect, useMemo, useState } from 'react';

import InputSearch from '@components/InputSearch';
import Loader from '@components/Loader';
import ProfileDetails from '@components/Profile-Details';
import RepositoryDetails from '@components/Repository-Details';
import useActions from '@hooks/useActions';
import { useAppState, useReduxActions } from '@hooks/useReduxActions';

const Dashboard = () => {
    const { isLoading, isError, error, user, searchName } = useAppState((state) => state.user);
    const {
        isLoading: _isLoading,
        isError: _isError,
        error: _error,
        repositories,
        paginationQuery: { hasNext },
    } = useAppState((state) => state.repository);

    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 5;

    const profile = useMemo(() => user, [user]);

    const { getUserByUserName, getRepositoriesByUsername } = useActions();

    const { resetRepository } = useReduxActions();

    const handleNextPageAction = () => setCurrentPage(currentPage + 1);

    useEffect(() => {
        getUserByUserName(searchName);
        resetRepository();
    }, [searchName]);

    useEffect(() => {
        getRepositoriesByUsername({ userName: searchName, currentPage, pageLimit });
    }, [searchName, currentPage, pageLimit]);

    useEffect(() => {
        console.log('💛 dashboard is mounted...');
        setCurrentPage(1);
        resetRepository();

        return () => {
            console.log('🌊 dashboard is unmounted...');
        };
    }, []);

    if (isLoading || _isLoading) return <Loader />;

    if (isError || _isError) return <div>Error: {error || _error}</div>;

    return (
        <>
            <InputSearch />
            <ProfileDetails profile={profile} />
            <RepositoryDetails
                repositories={repositories}
                hasMore={hasNext}
                onNextPage={handleNextPageAction}
            />
        </>
    );
};

export default Dashboard;
