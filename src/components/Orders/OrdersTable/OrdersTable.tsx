import React, { useMemo, useState } from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { BaseTable } from '../../Base';
import { OrderMinimalInfo, OrdersQuery } from '../../../interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { MoreAboutOrderButton } from '../MoreAboutOrder';
import { orderStatusMap, time } from '../../../service';
import { OrderStatus, SortDateType } from '../../../contants';
import { OptionValue, SelectWithLabel } from '../../Base/Input/SelectWithLabel';
import { Box } from '@mui/material';

const statusOptions: OptionValue<OrderStatus | undefined>[] = [
  { value: undefined, label: 'Всі' },
  { value: OrderStatus.CREATED, label: 'Створені' },
  { value: OrderStatus.DELIVERED, label: 'Доставлені' },
];

const sortOptions: OptionValue<SortDateType>[] = [
  { value: SortDateType.DESC, label: 'Спочатку нові' },
  { value: SortDateType.ASC, label: 'Спочатку старі' },
];

export const OrdersTable = () => {
  const [ordersQuery, setOrdersQuery] = useState<OrdersQuery>({
    sortByCreatedAtDate: SortDateType.ASC,
  });

  const { orders } = useOrders(ordersQuery);

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
        accessorKey: 'address',
        header: 'Адреса',
        cell: (info) => info.getValue(),
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

  const selectedValueOption = statusOptions.find(
    (option) => option.value === ordersQuery.withStatus,
  );

  const onStatusChange = (value: OrderStatus | undefined) => {
    setOrdersQuery({
      ...ordersQuery,
      withStatus: value,
    });
  };

  const onSortChange = (value: SortDateType) => {
    setOrdersQuery({
      ...ordersQuery,
      sortByCreatedAtDate: value,
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SelectWithLabel
          options={statusOptions}
          selectedValue={ordersQuery.withStatus}
          onChange={onStatusChange}
          label="Статус"
        />
        <SelectWithLabel
          options={sortOptions}
          selectedValue={ordersQuery.sortByCreatedAtDate}
          onChange={onSortChange}
          label="сортувати"
          slotProps={{
            select: {
              sx: {
                width: '180px',
              },
            },
          }}
        />
      </Box>

      {orders && (
        <BaseTable
          {...{
            data: orders,
            columns,
          }}
        />
      )}
    </Box>
  );
};
