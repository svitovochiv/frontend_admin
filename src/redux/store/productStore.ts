import { Product } from '../../interfaces';
import { createSlice } from '@reduxjs/toolkit';

export interface ProductStore {
  products?: Product[];
}

const initialState: ProductStore = {};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProducts: (
      state,
      action: {
        payload: {
          products: Product[];
        };
      },
    ) => {
      state.products = action.payload.products;
    },
  },
});

export const productAction = productSlice.actions;
