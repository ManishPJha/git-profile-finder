import type { IUser } from '@_types/features/user';

export const transformUserResponse = (data: any): IUser => {
    const transformedUser: IUser = {
        id: data.id,
        name: data.name,
        email: data.email,
        username: data.login,
        avatar: data.avatar_url,
        githubUrl: `https://github.com/${data.login}`,
        company: data.company,
        location: data.location,
        bio: data.bio,
        twitter_username: data.twitter_username,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
        created_at: data.created_at,
        updated_at: data.updated_at,
    };

    return transformedUser;
};
