import InputSearch from '@components/InputSearch';
import ProfileDetails from '@components/Profile-Details';
import { useEffect, useMemo } from 'react';

import RepositoryDetails from '@components/Repository-Details';
import { getRepositoriesByUsername } from '@features/repositories';
import { getUserByUserName } from '@features/user';
import { useDispatch } from 'react-redux';
import { useAppState, useReduxActions } from '../hooks/useReduxActions';
import { AppDispatch } from '../store';

const Dashboard = () => {
    const { isLoading, isError, error, user } = useAppState((state) => state.user);
    const {
        isLoading: isLoadingRepos,
        isError: isErrorRepos,
        error: errorRepos,
        repositories,
    } = useAppState((state) => state.repository);

    const profile = useMemo(() => user, [user]);

    const { reset } = useReduxActions();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserByUserName('ManishPJha'));
        dispatch(getRepositoriesByUsername('ManishPJha'));
    }, [dispatch]);

    if (isLoading || isLoadingRepos) return <div>Loading...</div>;

    if (isError || isErrorRepos) return <div>Error: {error || errorRepos}</div>;

    return (
        <div>
            <InputSearch
                dispatch={dispatch}
                getUserByUserName={getUserByUserName}
                getRepositoriesByUsername={getRepositoriesByUsername}
            />
            {profile && <ProfileDetails profile={profile} />}
            {repositories && repositories.length > 0 ? (
                <RepositoryDetails repositories={repositories} />
            ) : (
                <div>No repositories found</div>
            )}
        </div>
    );
};

export default Dashboard;
