import React from 'react';
import { useGetProductsQuery } from '../../../api';
import { ColumnDef } from '@tanstack/react-table';
import { Product } from '../../../interfaces';
import { PriceTable } from '../../Base';

export const ProductsTable = () => {
  const { data: products } = useGetProductsQuery();

  const columns = React.useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'name',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 250,
      },
      {
        accessorKey: 'quantity',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'price',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  return (
    <div>
      {products && (
        <PriceTable
          {...{
            data: products,
            columns,
          }}
        />
      )}
    </div>
  );
};
