import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useEffect } from 'react';
import styles from './BaseTable.module.scss';
import { BaseTableNavigation } from './BaseTableNavigation';
import { useVirtualizer } from '@tanstack/react-virtual';

export function BaseTableOld({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<any>[];
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel({
      initialSync: true,
    }),
    debugTable: true,
  });

  useEffect(() => {
    table.setPageSize(50);
  }, []);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {},
    [],
  );

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  return (
    <div>
      <BaseTableNavigation table={table} />
      <table className={styles.tableContainer}>
        <thead className={styles.headerContainer}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { width, minWidth } = {
                  width: header.column.getSize(),
                  minWidth: header.column.getSize(),
                };
                return (
                  <th
                    className={styles.headerCell}
                    style={{
                      width,
                      minWidth,
                    }}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanFilter() ? <div></div> : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className={styles.bodyContainer}>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className={styles.bodyRow} key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const hasMeta = cell.getContext().cell.column.columnDef.meta;
                  const meta = hasMeta && {
                    ...hasMeta.getCellContext(cell.getContext()),
                  };
                  return (
                    <td style={{ ...meta?.style }} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
    </div>
  );
}

type BaseTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

type BaseTableComponent = <T>(props: BaseTableProps<T>) => React.ReactElement;

export const BaseTable: BaseTableComponent = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {},
    [],
  );

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <div ref={tableContainerRef}>
      {/*<BaseTableNavigation table={table} />*/}
      <table className={styles.tableContainer}>
        <thead className={styles.headerContainer}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { width, minWidth } = {
                  width: header.column.getSize(),
                  minWidth: header.column.getSize(),
                };
                return (
                  <th
                    className={styles.headerCell}
                    style={{
                      width,
                      minWidth,
                    }}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanFilter() ? <div></div> : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className={styles.bodyContainer}>
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index];
            return (
              <tr className={styles.bodyRow} key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const hasMeta = cell.getContext().cell.column.columnDef.meta;
                  const meta = hasMeta && {
                    ...hasMeta.getCellContext(cell.getContext()),
                  };
                  return (
                    <td style={{ ...meta?.style }} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
    </div>
  );
};
