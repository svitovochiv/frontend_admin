export type IGetProductsResponse = {
  products: {
    id: string;
    name: string;
    quantity: string;
    price: number;
    updatedAt: string;
  }[];
};
