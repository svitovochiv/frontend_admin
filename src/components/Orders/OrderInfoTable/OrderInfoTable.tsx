import React, { useMemo } from 'react';
import { OrderedProduct } from '../../../interfaces';
import { BaseTable } from '../../Base';
import { ColumnDef } from '@tanstack/react-table';

export const OrderInfoTable: React.FC<{
  orderedProducts: OrderedProduct[];
}> = ({ orderedProducts }) => {
  const columns = useMemo<ColumnDef<OrderedProduct>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Назва',
        cell: (info) => info.getValue(),
        size: 200,
      },
      {
        accessorKey: 'price',
        header: 'Ціна',
        cell: (info) => `${info.getValue()}грн`,
      },
      {
        accessorKey: 'quantity',
        header: 'Кількість',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'sum',
        header: 'Сума',
        cell: (info) => `${info.getValue()}грн`,
      },
    ],
    [],
  );

  return (
    <div>
      <BaseTable
        {...{
          data: orderedProducts,
          columns,
        }}
      />
    </div>
  );
};
