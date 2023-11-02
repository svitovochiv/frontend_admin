import { PaymentMethod } from '../../enum';

export const paymentMap: {
  [key in PaymentMethod]: string;
} = {
  [PaymentMethod.CASH]: 'Готівка',
  [PaymentMethod.CREDIT_CARD]: 'Карта',
};
