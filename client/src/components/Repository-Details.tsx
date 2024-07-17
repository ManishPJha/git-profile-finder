import { RepositoryDetailsPropsTypes } from '@_types/components/Repository-Details';
import { Link } from 'react-router-dom';
import Button from './Button';

const RepositoryDetails = ({ repositories, hasMore, onNextPage }: RepositoryDetailsPropsTypes) => {
    return (
        <>
            <div className="mt-3">
                {repositories && repositories.length ? (
                    repositories.map((repo) => (
                        <div key={repo.id} className="bg-gray-800 p-4 rounded-md mb-4">
                            <div className="flex justify-between items-center gap-4">
                                <div>
                                    <h2 className="text-white">{repo.name}</h2>
                                    <p className="text-gray-400">{repo.description}</p>
                                </div>
                                <div>
                                    <Link
                                        to={repo.repository_url}
                                        target="_blank"
                                        className="text-white hover:text-gray-200"
                                    >
                                        View on GitHub - {repo.id}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No repositories found</div>
                )}
            </div>
            <div className="text-center">
                <Button variant="primary" onClick={onNextPage} disabled={!hasMore}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default RepositoryDetails;
