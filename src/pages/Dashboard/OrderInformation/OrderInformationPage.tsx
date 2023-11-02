import React from 'react';
import { useGetOrderInformationQuery } from '../../../api';
import { useParams } from 'react-router-dom';

export const OrderInformationPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetOrderInformationQuery(
    { orderId: id as string },
    { skip: !id },
  );

  return (
    <div>
      OrderInformation
      <br />
      <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>
    </div>
  );
};
