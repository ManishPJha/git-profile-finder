import { createSlice } from "@reduxjs/toolkit";

type IUser = {
	name: string;
	nickname: string;
	picture: string;
	sub: string;
	updated_at: string;
};

type UserFeatureTypes = {
	profile: Omit<IUser, "sub"> | null;
	users: IUser[];
	isAuthenticated: boolean;
};

const initialState: UserFeatureTypes = {
	profile: null,
	users: [],
	isAuthenticated: false,
};

const userFeatures = createSlice({
	name: "user",
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload;
			state.isAuthenticated = true;
			return state;
		},
		setUsers: (state, action) => {
			state.users = action.payload;
			return state;
		},
		resetProfile: (state) => {
			state.profile = null;
			return state;
		},
		resetUsers: (state) => {
			state.users = [];
			return state;
		},
	},
});

export const { setProfile, setUsers, resetProfile, resetUsers } =
	userFeatures.actions;

export default userFeatures;
