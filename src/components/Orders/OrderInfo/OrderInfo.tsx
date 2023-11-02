import React from 'react';
import { useGetOrderInformationQuery } from '../../../api';
import {
  OrderDeliveryInfo,
  OrderedProduct,
  OrderMinimalInfo,
  Quantity,
} from '../../../interfaces';
import { OrderInfoTable } from '../OrderInfoTable';
import { BaseOrderInfo } from './BaseOrderInfo';

export const OrderInfo: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  const { data: fullOrderInfo } = useGetOrderInformationQuery({
    orderId: orderId,
  });
  const orderedProducts: OrderedProduct[] | undefined =
    fullOrderInfo?.orderedProducts.map((orderedProduct) => ({
      orderId: orderedProduct.orderId,
      productId: orderedProduct.productId,
      count: orderedProduct.count,
      name: orderedProduct.name,
      price: orderedProduct.price,
      sum: orderedProduct.sum,
      quantity: orderedProduct.quantity as Quantity,
    }));

  const baseOrderInfo: OrderDeliveryInfo | undefined = fullOrderInfo && {
    orderId: fullOrderInfo.id,
    sum: fullOrderInfo.totalPrice,
    status: fullOrderInfo.status,
    createdAt: fullOrderInfo.createdAt,
    updatedAt: fullOrderInfo.updatedAt,
    address: fullOrderInfo.address,
    paymentMethod: fullOrderInfo.paymentMethod,
    contactNumber: fullOrderInfo.contactNumber,
    recipient: fullOrderInfo.recipient,
  };

  return (
    <div>
      {baseOrderInfo && <BaseOrderInfo deliveryInfo={baseOrderInfo} />}
      {orderedProducts && <OrderInfoTable orderedProducts={orderedProducts} />}
    </div>
  );
};
