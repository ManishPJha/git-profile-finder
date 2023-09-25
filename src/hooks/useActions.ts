import { useAuth0 } from "@auth0/auth0-react";

type ActionType =
	| "signinAction"
	| "signoutAction"
	| "searchAction"
	| "starAction";

type Actions = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key in ActionType]: (e?: any) => void;
};

const useActions = () => {
	const { loginWithRedirect, logout } = useAuth0();

	const actions: Actions = {
		signinAction: () => loginWithRedirect(),
		signoutAction: () => logout(),
		searchAction: (e: React.SyntheticEvent<HTMLButtonElement>) => {
			e.preventDefault();
		},
		starAction: () => {},
	};

	return {
		...actions,
	};
};

export default useActions;
