/// <reference types="vite/client" />

import { CellContext } from '@tanstack/react-table';
import { TableCellProps } from './interfaces/table/MColumnDef';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    // Your additional properties here
    getCellContext: (
      context: CellContext<TData, TValue>,
    ) => TableCellProps | undefined;
  }
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
