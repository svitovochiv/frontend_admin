import { OrderStatus, SortDateType } from '../../../contants';

export type IGetOrdersResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  paymentMethod: string;
  totalPrice: number;
  address: string;
  recipient: string;
  contactNumber: string;
}[];

export type GetOrdersRequest = {
  withUserId?: string;
  withStatus?: OrderStatus;
  sortByCreatedAtDate?: SortDateType;
};
