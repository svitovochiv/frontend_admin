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
