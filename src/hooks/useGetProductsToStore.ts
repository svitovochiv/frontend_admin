import { useGetProductsQuery } from '../api';
import { useAppDispatch } from './useAppDispatch';
import { useEffect } from 'react';
import { productAction } from '../redux';
import { quantityUtil } from '../utils/quantity.util';
import { Product } from '../interfaces';

export const useGetProductsToStore = () => {
  const { data: products } = useGetProductsQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products) {
      // check quantity
      const checkedProducts: Product[] = products.products.map((product) => {
        const normalizedQuantity = quantityUtil.normalizeQuantity(
          product.quantity,
        );
        return { ...product, quantity: normalizedQuantity };
      });
      dispatch(productAction.setProducts({ products: checkedProducts }));
    }
  }, [products]);
};
