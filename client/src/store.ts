import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type PersistConfig, persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { user } from './features/index';

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: storage,
    whitelist: [user.name],
    blacklist: [''],
};

const reducers = combineReducers({
    [user.name]: user.reducer,
});

const persistedReducer = persistReducer<any>(persistConfig, reducers);

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
