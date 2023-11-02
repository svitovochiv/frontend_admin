import React from 'react';
import { useGetOrderInformationQuery } from '../../../api';
import {
  OrderDeliveryInfo,
  OrderedProduct,
  Quantity,
} from '../../../interfaces';
import { OrderInfoTable } from '../OrderInfoTable';
import { BaseOrderInfo } from './BaseOrderInfo';
import styles from './OrderInfo.module.scss';
import { PaymentMethod } from '../../../enum';

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
    paymentMethod: fullOrderInfo.paymentMethod as PaymentMethod,
    contactNumber: fullOrderInfo.contactNumber,
    recipient: fullOrderInfo.recipient,
  };

  return (
    <div className={styles.container}>
      <div className={styles.orderInfo}>
        {baseOrderInfo && <BaseOrderInfo deliveryInfo={baseOrderInfo} />}
      </div>
      <div>
        {orderedProducts && (
          <OrderInfoTable orderedProducts={orderedProducts} />
        )}
      </div>
    </div>
  );
};
