import type { IRepository } from '@_types/features/repositories';

export const transformRepositoriesResponse = (data: any): Array<IRepository> => {
    return data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        isTemplate: repo.is_template,
        forked: repo.fork,
        forksCount: repo.forks_count,
        watchersCount: repo.watchers_count,
        repository_url: repo.html_url,
        language: repo.language,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
    }));
};
