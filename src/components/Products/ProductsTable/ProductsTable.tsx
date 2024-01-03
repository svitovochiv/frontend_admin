import React, { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Product } from '../../../interfaces';
import { BaseTable } from '../../Base';
import { quantityUtil } from '../../../utils/quantity.util';
import { useAppSelector, useGetProductsToStore } from '../../../hooks';

export const ProductsTable = () => {
  useGetProductsToStore();
  const products = useAppSelector((state) => state.productSlice.products);
  const columns = React.useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Назва',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 250,
      },
      {
        accessorKey: 'quantity',
        header: 'тип',
        cell: (info) => {
          const quantity = info.getValue();
          return quantityUtil.quantityToUkraineQuantity(quantity);
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'price',
        header: 'Ціна',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  return (
    <div>
      {products && (
        <BaseTable
          {...{
            data: products,
            columns,
          }}
        />
      )}
    </div>
  );
};
