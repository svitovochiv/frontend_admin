import { OrderStatus, SortDateType } from '../../../contants';

export interface OrdersQuery {
  withUserId?: string;
  withStatus?: OrderStatus;
  sortByCreatedAtDate?: SortDateType;
}
