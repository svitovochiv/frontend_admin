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
import { MButton } from '../../Button';

export function BaseTable({
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

  return (
    <div>
      <div />
      <div className={styles.buttonContainer}>
        <MButton
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </MButton>
        <MButton
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </MButton>
        <MButton
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </MButton>
        <MButton
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </MButton>
        <span>
          <div>Сторінка</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span>
          | сторінка:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Показати {pageSize}
            </option>
          ))}
        </select>
      </div>
      <table className={styles.tableContainer}>
        <thead className={styles.headerContainer}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { width, minWidth } = {
                  width: header.column.getSize(),
                  minWidth: header.column.getSize(),
                };
                console.log('width', width);
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
                  const size = cell.column.getSize();
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
