import { useGetOrdersQuery } from '../api';
import { OrderMinimalInfo } from '../interfaces';

export const useOrders = () => {
  const { data } = useGetOrdersQuery();
  return {
    orders: data as OrderMinimalInfo[] | undefined,
  };
};
