import React from 'react';
import { Table } from '@tanstack/react-table';
import styles from './BaseTable.module.scss';
import {
  Box,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export const BaseTableNavigation: React.FC<{
  table: Table<any>;
}> = ({ table }) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();

  const onPageCountChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const page = e.target.value ? Number(e.target.value) - 1 : 0;
    // debugger;
    if (page >= 0 && page < pageCount) {
      table.setPageIndex(page);
    }
  };

  return (
    <Box className={styles.buttonContainer}>
      <Box>
        <IconButton
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        Сторінка:
        <Input
          size="small"
          type="number"
          defaultValue={currentPage}
          value={currentPage}
          onChange={onPageCountChange}
          sx={{
            width: '50px',
            marginLeft: '5px',
            marginRight: '5px',
            '& input': {
              textAlign: 'center',
            },
          }}
        />
        <Typography>з {pageCount}</Typography>
      </Box>
    </Box>
  );
};
