import React from 'react';
import { Box, ListItem, MenuItem, Select, Typography } from '@mui/material';

import lodash from 'lodash';
import { SelectProps } from '@mui/material/Select/Select';

export interface OptionValue<T> {
  value: T;
  label: string;
}

export interface SelectWithLabelProps<Value, Option = OptionValue<Value>> {
  options: Option[];
  selectedValue?: Value;
  onChange: (value: Value) => void;
  label?: string;
  slotProps?: {
    select?: {
      sx: SelectProps['sx'];
    };
  };
}

type SelectWithLabelType = <T>(
  props: SelectWithLabelProps<T>,
) => React.ReactElement;

export const SelectWithLabel: SelectWithLabelType = ({
  selectedValue,
  onChange,
  options,
  label,
  slotProps,
}) => {
  const selectedValueOption = options.find((option) =>
    lodash.isEqual(option.value, selectedValue),
  );
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
      <Select
        size="small"
        sx={{
          width: '140px',
        }}
        renderValue={() => selectedValueOption?.label || 'Всі'}
        value={selectedValueOption?.value || null}
        displayEmpty
        {...slotProps?.select}
      >
        {options.map((statusOption) => {
          const onClick = () => {
            onChange(statusOption.value);
          };
          return <MenuItem onClick={onClick}>{statusOption.label}</MenuItem>;
        })}
      </Select>
    </Box>
  );
};
