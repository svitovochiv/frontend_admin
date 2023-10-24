import React, { useMemo } from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { BaseTable } from '../../Base';
import { OrderMinimalInfo } from '../../../interfaces';
import moment from 'moment';
import { ColumnDef } from '@tanstack/react-table';
import { createCellContext } from '../../../interfaces/table/MColumnDef';
import { MoreAboutOrderButton } from '../MoreAboutOrder';
import { orderStatusMap } from '../../../service';
import { OrderStatus } from '../../../contants';

export const OrdersTable = () => {
  const { orders } = useOrders();

  const columns = useMemo<ColumnDef<OrderMinimalInfo>[]>(
    () => [
      {
        accessorKey: 'id',
        header: '№',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 60,
        meta: {
          getCellContext: () =>
            createCellContext({
              style: {
                fontSize: 12,
                maxWidth: 60,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
            }),
        },
      },
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
        accessorKey: 'createdAt',
        header: 'Створено',
        cell: (info) =>
          moment(info.getValue() as string).format('DD.MM.YYYY HH:mm'),
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
