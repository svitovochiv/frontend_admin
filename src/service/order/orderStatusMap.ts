import { OrderStatus } from '../../contants';

export const orderStatusMap: {
  [key in OrderStatus]: string;
} = {
  [OrderStatus.CREATED]: 'Новий',
  [OrderStatus.DELIVERED]: 'Доставлено',
};
