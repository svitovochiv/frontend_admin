import React from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import { OrderManipulationInfo } from '../../../interfaces';
import { OrderStatus } from '../../../contants';
import { orderStatusMap } from '../../../service';
import { useUpdateOrderMutation } from '../../../api';

export const OrderManipulation: React.FC<{
  manipulationInfo: OrderManipulationInfo;
}> = ({ manipulationInfo }) => {
  const OrderStatuses = Object.values(OrderStatus).map((key) => {
    return {
      value: key,
      label: orderStatusMap[key],
    };
  });

  const selectedValue = OrderStatuses.find((status) => {
    if (status.value === manipulationInfo.status) {
      return {
        value: status,
        label: orderStatusMap[status.value],
      };
    }
  });

  const [updateOrder] = useUpdateOrderMutation();

  const changeOrderStatus = (orderStatus: OrderStatus) => {
    void updateOrder({
      orderId: manipulationInfo.orderId,
      orderStatus,
    });
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Box>
        <Select
          value={selectedValue?.value || null}
          onChange={(e) => changeOrderStatus(e.target.value as OrderStatus)}
          size="small"
          sx={{
            width: '150px',
          }}
        >
          {OrderStatuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};
