import React, { createContext, useContext, useMemo, useReducer } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context = createContext<any>(null);

type ActionType = {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
};

const initState = {
	theme: "DAY",
};

const reducer = (state = initState, action: ActionType) => {
	switch (action.type) {
		case "SET_THEME":
			state.theme = action.payload;
			return state;

		default:
			throw new Error(`invalid ${action.type}`);
	}
};

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(reducer, initState);
	const value = useMemo(() => [state, dispatch], [state, dispatch]);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => {
	const context = useContext(Context);

	if (!context) {
		throw new Error("use useAppContext hook inside AppContextProvider.");
	}

	return context;
};
