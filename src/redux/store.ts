import { configureStore } from "@reduxjs/toolkit";

import config from "@/config/default";

const reducer = {};

const createStore = () =>
	configureStore({
		reducer,
		devTools: config.PROD_ENV,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({
				serializableCheck: false,
			});
		},
	});

const store = createStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
