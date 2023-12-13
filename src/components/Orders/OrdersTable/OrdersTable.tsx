import React, { useMemo } from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { BaseTable } from '../../Base';
import { OrderMinimalInfo } from '../../../interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { MoreAboutOrderButton } from '../MoreAboutOrder';
import { orderStatusMap, time } from '../../../service';
import { OrderStatus } from '../../../contants';

export const OrdersTable = () => {
  const { orders } = useOrders();

  const columns = useMemo<ColumnDef<OrderMinimalInfo>[]>(
    () => [
      {
        accessorKey: 'recipient',
        header: 'Клієнт',
        cell: (info) => info.getValue(),
        size: 200,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Статус',
        cell: (info) => orderStatusMap[info.getValue() as OrderStatus],
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'totalPrice',
        header: 'Сума',
        cell: (info) => `${info.getValue()}грн`,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Статус',
        cell: (info) => orderStatusMap[info.getValue() as OrderStatus],
      },
      {
        accessorKey: 'createdAt',
        header: 'Створено',
        cell: (info) =>
          time(info.getValue() as string).format('DD.MM.YYYY HH:mm'),
        footer: (props) => props.column.id,
      },
      {
        id: 'more',
        size: 0,
        minSize: 0,
        cell: (info) => <MoreAboutOrderButton orderId={info.row.original.id} />,
      },
    ],
    [],
  );

  return (
    <div>
      {orders && (
        <BaseTable
          {...{
            data: orders,
            columns,
          }}
        />
      )}
    </div>
  );
};
