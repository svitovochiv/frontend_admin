import { PaymentMethod } from '../../../enum';

export interface OrderDeliveryInfo {
  orderId: string;
  recipient: string;
  address: string;
  contactNumber: string;
  paymentMethod: PaymentMethod;
  status: string;
  createdAt: string;
  updatedAt: string;
  sum: number;
}
