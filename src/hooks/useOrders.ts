import { useGetOrdersQuery } from '../api';
import { OrderMinimalInfo, OrdersQuery } from '../interfaces';

export const useOrders = (ordersQuery?: OrdersQuery) => {
  const { data } = useGetOrdersQuery(ordersQuery);
  return {
    orders: data as OrderMinimalInfo[] | undefined,
  };
};
