import { RepositoryDetailsPropsTypes } from '@_types/components/Repository-Details';

const RepositoryDetails = ({ repositories }: RepositoryDetailsPropsTypes) => {
    return (
        <div className="mt-3">
            {repositories.map((repo) => (
                <div key={repo.id} className="bg-gray-800 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <h2 className="text-white">{repo.name}</h2>
                            <p className="text-gray-400">{repo.description}</p>
                        </div>
                        <div>
                            {/* <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-800"
                            >
                                View on GitHub
                            </a> */}
                            <span>View on GitHub</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RepositoryDetails;
