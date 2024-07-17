import { IRepository } from '@_types/features/repositories';

export type RepositoryDetailsPropsTypes = {
    repositories: Array<IRepository>;
    hasMore: boolean;
    onNextPage: () => void;
};
