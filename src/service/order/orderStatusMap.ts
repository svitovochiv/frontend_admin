import { OrderStatus } from '../../contants';

export const orderStatusMap: {
  [key in OrderStatus]: string;
} = {
  [OrderStatus.CREATED]: 'Новий',
  [OrderStatus.SUBMITTED]: 'Підтверджений',
  [OrderStatus.SENT]: 'Відправлений',
  [OrderStatus.CANCELLED]: 'Скасований',
  [OrderStatus.DELIVERED]: 'Доставлено',
};
