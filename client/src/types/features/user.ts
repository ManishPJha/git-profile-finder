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
    email: string;
    token: string;
    avatar: string;
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
