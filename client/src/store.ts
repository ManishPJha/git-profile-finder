import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { repository, user } from './features/index';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [user.name],
    blacklist: [repository.name],
};

const reducers = combineReducers({
    [user.name]: user.reducer,
    [repository.name]: repository.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const createStore = () => {
    return configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV === 'development',
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
                thunk: true,
                // other middleware
            });
        },
    });
};

export const store = createStore();

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
