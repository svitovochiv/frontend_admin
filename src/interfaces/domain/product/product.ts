import { Quantity } from './quantity';

export interface Product {
  id: string;
  name: string;
  quantity: Quantity;
  price: number;
}
