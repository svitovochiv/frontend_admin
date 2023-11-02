import React from 'react';
import { useGetOrderInformationQuery } from '../../../api';
import { OrderedProduct } from '../../../interfaces';
import { OrderInfoTable } from '../OrderInfoTable';

export const OrderInfo: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  const { data: orderInfo } = useGetOrderInformationQuery({ orderId: orderId });
  const orderedProducts: OrderedProduct[] | undefined =
    orderInfo?.orderedProducts.map((orderedProduct) => ({
      orderId: orderedProduct.orderId,
      productId: orderedProduct.productId,
      count: orderedProduct.count,
      name: orderedProduct.name,
      price: orderedProduct.price,
      sum: orderedProduct.sum,
    }));
  return (
    <div>
      {orderedProducts && <OrderInfoTable orderedProducts={orderedProducts} />}
    </div>
  );
};
