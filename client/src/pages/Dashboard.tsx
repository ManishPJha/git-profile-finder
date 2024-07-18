import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

import Loader from '@components/Loader';
import useActions from '@hooks/useActions';
import { useAppState, useReduxActions } from '@hooks/useReduxActions';

const InputSearch = lazy(() => import('@components/InputSearch'));
const ProfileDetails = lazy(() => import('@components/Profile-Details'));
const RepositoryDetails = lazy(() => import('@components/Repository-Details'));

const Dashboard = () => {
    const { isLoading, isError, error, user, searchName } = useAppState((state) => state.user);
    const {
        isLoading: _isLoading,
        isError: _isError,
        error: _error,
        repositories,
        paginationQuery: { hasNext },
    } = useAppState((state) => state.repository);

    const pageLimit = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const profile = useMemo(() => user, [user]);

    const { resetRepository, setPagination } = useReduxActions();

    const { getUserByUserName, getRepositoriesByUsername } = useActions();

    const handleNextPageAction = () => setCurrentPage(currentPage + 1);

    useEffect(() => {
        getUserByUserName(searchName);
        // dispatch({ type: 'repository/setPagination', payload });
    }, [searchName]);

    useEffect(() => {
        if (user) {
            console.log('💚 ', user);
            const totalRepos = user.public_repos || 0;
            const totalPages = Math.ceil(totalRepos / pageLimit);

            const isUser = user.username === searchName;

            const payload = {
                currentPage: currentPage,
                pageLimit: pageLimit,
                totalPages: totalPages,
                sort: 'created',
                direction: 'desc',
                hasNext: currentPage < totalPages,
            };

            setPagination(payload);
            getRepositoriesByUsername({
                userName: isUser ? user.username : searchName,
                currentPage,
                pageLimit,
            });
        }
    }, [user?.username, searchName, currentPage, pageLimit]);

    useEffect(() => {
        console.log('💛 dashboard is mounted...');

        return () => {
            console.log('🌊 dashboard is unmounted...');
            resetRepository();
        };
    }, []);

    if (isLoading || _isLoading) return <Loader />;

    if (isError || _isError) return <div>Error: {error || _error}</div>;

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <InputSearch setCurrentPage={setCurrentPage} />
                <ProfileDetails profile={profile} />
                <RepositoryDetails
                    repositories={repositories}
                    hasMore={hasNext}
                    onNextPage={handleNextPageAction}
                />
            </Suspense>
        </>
    );
};

export default Dashboard;
