import { Quantity } from '../product';

export interface OrderedProduct {
  name: string;
  count: number;
  price: number;
  orderId: string;
  productId: string;
  sum: number;
  quantity: Quantity;
}
