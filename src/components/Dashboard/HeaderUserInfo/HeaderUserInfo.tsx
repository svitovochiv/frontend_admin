import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useGetCurrentUserQuery } from '../../../api';
import { route } from '../../../service/router/route';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../service';

export const HeaderUserInfo = () => {
  const { isLoading, data: user } = useGetCurrentUserQuery();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userBurgerMenuOptions = [
    {
      label: 'вийти',
      action: async () => {
        await logout();
        navigate(route.login);
      },
    },
  ];

  if (isLoading) {
    return (
      <Box>
        <Typography>Завнтаження...</Typography>
      </Box>
    );
  }
  if (user) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {userBurgerMenuOptions.map((option) => (
            <MenuItem
              key={option.label}
              onClick={async () => {
                await option.action();
                handleClose();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  }

  const onLoginClick = () => {
    navigate(route.login);
  };
  return (
    <Box>
      <Button onClick={onLoginClick}>Увійти</Button>
    </Box>
  );
};
