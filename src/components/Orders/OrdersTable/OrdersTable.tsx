import React from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { BaseTable } from '../../Base';
import { OrderMinimalInfo } from '../../../interfaces';
import moment from 'moment';
import { CellContext, ColumnDef } from '@tanstack/react-table';
import { createCellContext } from '../../../interfaces/table/MColumnDef';

export const OrdersTable = () => {
  const { orders } = useOrders();

  const columns = React.useMemo<ColumnDef<OrderMinimalInfo>[]>(
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
        cell: (info) => info.getValue(),
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
