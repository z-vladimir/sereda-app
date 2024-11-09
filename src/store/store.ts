import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
