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

export type PaginationQuery = {
    page: Nullable<number>;
    perPage: Nullable<number>;
    totalPages: Nullable<number>;
    sort: string;
    direction: string;
    hasNext: boolean;
};

export interface IRepositoryState extends RequestStateTypes {
    repositories: IRepository[];
    repository: Nullable<IRepository>;
    pagination: boolean;
    paginationQuery: PaginationQuery;
}
