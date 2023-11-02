import React, { useMemo } from 'react';
import { OrderedProduct } from '../../../interfaces';
import { BaseTable } from '../../Base';
import { ColumnDef } from '@tanstack/react-table';
import { quantityUtil } from '../../../utils/quantity.util';

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
        accessorKey: 'count',
        header: 'Кількість',
        cell: (info) => {
          const quantity = info.row.original.quantity;
          const mappedQuantity =
            quantityUtil.quantityToUkraineQuantity(quantity);
          const value = info.getValue();
          return `${value}${mappedQuantity}`;
        },
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
