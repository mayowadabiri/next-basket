import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import customStorage from './cutomStorage';
import authSlice from './slices/authSlice';
import { dummyPlaceholderApi } from '@/api/baseQueries';

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducers = persistReducer(
  {
    key: 'nextjs/mui', //Update KEY
    version: 1,
    storage: customStorage,
  },
  rootReducer
);

const middleWares = [dummyPlaceholderApi.middleware];

export const store = configureStore({
  reducer: {
    [dummyPlaceholderApi.reducerPath]: dummyPlaceholderApi.reducer,
    persistedReducers,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleWares
    );
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
