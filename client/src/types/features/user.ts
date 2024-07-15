type RequestStateTypes = {
    isLoading: boolean;
    isError: boolean;
    error: string | null;
};

export type GenericResponse<T = null> = Record<'data', T> & {
    status: number;
};

export interface IUser {
    id: string;
    name: string;
    email: string | null;
    username: string;
    avatar: string;
    githubUrl: string;
    company: string | null;
    location: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface IUserState extends RequestStateTypes {
    user: IUser | null;
}

export interface IAuthState {
    user: IUser | null;
    isAuthenticated: boolean;
}

export interface IAuthAction {
    type: string;
    payload: IUser | null;
}
