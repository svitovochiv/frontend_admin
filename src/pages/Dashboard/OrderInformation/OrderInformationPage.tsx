import React from 'react';
import { useParams } from 'react-router-dom';
import { OrderInfo } from '../../../components';

export const OrderInformationPage = () => {
  const { id: orderId } = useParams<{ id: string }>();

  return <div>{orderId && <OrderInfo orderId={orderId} />}</div>;
};
