import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/user/userSlice';

const persistedCartReducer = persistReducer({ key: 'user', storage }, userSlice);

export const store = configureStore({
  reducer: {
    userReducer: persistedCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export const persistor = persistStore(store);
