import React, { useEffect } from 'react';
import z from 'zod';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useLoginEmailPasswordMutation } from '../api';
import { route } from '../service/router/route';

// use form login form

enum EFormFields {
  email = 'email',
  password = 'password',
}

const errorMessages = {
  [EFormFields.email]: 'введіть коректний email',
  [EFormFields.password]: 'введіть пароль',
};

const validationSchema = z.object({
  [EFormFields.email]: z.string({
    required_error: errorMessages[EFormFields.email],
  }),
  [EFormFields.password]: z.string({
    required_error: errorMessages[EFormFields.password],
  }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginPage = () => {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const [login, { isSuccess }] = useLoginEmailPasswordMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(route.dashboard);
    }
  }, [isSuccess]);

  const onSubmit = async (data: ValidationSchema) => {
    await login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Box component="form">
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await form.handleSubmit(onSubmit)();
        }}
      >
        Увійти
      </Button>
    </Box>
  );
};
