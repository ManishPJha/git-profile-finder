import { RequestStateTypes } from './user';

export interface IRepository {
    id: number;
    name: string;
    fullName: string;
    description: Nullable;
    isTemplate: boolean;
    forked: boolean;
    forksCount: number;
    watchersCount: number;
    repository_url: string;
    language: string;
    created_at: string;
    updated_at: string;
}

export interface IRepositoryState extends RequestStateTypes {
    repositories: IRepository[];
    repository: Nullable<IRepository>;
}
