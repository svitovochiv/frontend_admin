export interface OrderMinimalInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  paymentMethod: string;
  address: string;
  recipient: string;
  contactNumber: string;
  sum: number;
}
