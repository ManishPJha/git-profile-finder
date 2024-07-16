export type RequestStateTypes = {
    isLoading: boolean;
    isError: boolean;
    error: Nullable;
};

export type GenericResponse<T = null> = Record<'data', T> & {
    status: number;
};

export interface IUser {
    id: string;
    name: string;
    email: Nullable;
    username: string;
    avatar: string;
    githubUrl: string;
    company: Nullable;
    location: Nullable;
    bio: Nullable;
    twitter_username: Nullable;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface IUserState extends RequestStateTypes {
    user: Nullable<IUser>;
    // searchName: string;
}

export interface IAuthState {
    user: Nullable<IUser>;
    isAuthenticated: boolean;
}

export interface IAuthAction {
    type: string;
    payload: Nullable<IUser>;
}
