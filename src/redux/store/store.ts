import { configureStore } from '@reduxjs/toolkit';
import { baseApi, productApi } from '../../api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productSlice } from './productStore';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [productSlice.name]: productSlice.reducer,
    // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
