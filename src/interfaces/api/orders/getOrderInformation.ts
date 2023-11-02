export interface GetOrderInformationRequest {
  orderId: string;
}

export interface GetOrderInformationResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  paymentMethod: string;
  totalPrice: number;
  address: string;
  recipient: string;
  contactNumber: string;
  orderedProducts: {
    orderId: string;
    price: number;
    count: number;
    productId: string;
    name: string;
    sum: number;
  }[];
}
