import { Quantity } from './quantity';

export interface Product {
  id: number;
  name: string;
  quantity: Quantity;
  price: number;
}
