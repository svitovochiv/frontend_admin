import React, { useMemo } from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { BaseTable } from '../../Base';
import { OrderMinimalInfo } from '../../../interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { MoreAboutOrderButton } from '../MoreAboutOrder';
import { orderStatusMap, time } from '../../../service';
import { OrderStatus } from '../../../contants';
import { Box, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';

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

  const statuses = [
    { value: undefined, label: 'Всі' },
    { value: OrderStatus.CREATED, label: 'Створені' },
    { value: OrderStatus.DELIVERED, label: 'Доставлені' },
  ];

  const [ordersQuery, setOrdersQuery] = React.useState<{
    status: OrderStatus | '';
  }>({
    status: '',
  });

  const selectedValueOption = statuses.find(
    (option) => option.value === ordersQuery.status,
  );

  const onStatusChange = (e: SelectChangeEvent<OrderStatus | ''>) => {
    setOrdersQuery({
      ...ordersQuery,
      status: e.target.value as OrderStatus | '',
    });
  };

  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Статус
        </Typography>
        <Select
          size="small"
          sx={{
            width: '140px',
          }}
          renderValue={() => selectedValueOption?.label || 'Всі'}
          onChange={onStatusChange}
          value={ordersQuery.status}
          displayEmpty
        >
          {statuses.map((statusOption) => {
            return (
              <MenuItem value={statusOption.value}>
                {statusOption.label}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
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
