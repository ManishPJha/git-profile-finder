import { configureStore } from "@reduxjs/toolkit";

import config from "@/config/default";

import { userFeatures } from "./features";

const reducer = {
	[userFeatures.name]: userFeatures.reducer,
};

const persistedState = JSON.parse(localStorage.getItem("gpfState") as string);

const createStore = () =>
	configureStore({
		reducer,
		devTools: !config.PROD_ENV,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({
				serializableCheck: false,
			});
		},
		preloadedState: persistedState ?? undefined,
	});

export const store = createStore();

let isPersisted = false; // flag to check wheather states are persisted or not

// persist store
store.subscribe(() => {
	const state = store.getState();

	// initital state persist
	if (!isPersisted) {
		localStorage.setItem("gpfState", JSON.stringify(state));
		isPersisted = true;
	}

	// update hydrated states if preloaded state is not matched with current state
	if (persistedState !== JSON.stringify(state)) {
		localStorage.setItem("gpfState", JSON.stringify(state));
		isPersisted = true;
	} else localStorage.removeItem("gpfState");
});

if (persistedState) {
	store.dispatch({ type: "REHYDRATE", payload: persistedState });
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
