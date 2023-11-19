import React, { useEffect, useState } from 'react';
import z from 'zod';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useLoginEmailPasswordMutation } from '../api';
import { route } from '../service/router/route';
import { FormPassword, FormText } from '../components/Base/FormInput';

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
  [EFormFields.email]: z
    .string({
      required_error: errorMessages[EFormFields.email],
    })
    .email(),
  [EFormFields.password]: z
    .string({
      required_error: errorMessages[EFormFields.password],
    })
    .min(1),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginPage = () => {
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const [login, { isSuccess, error }] = useLoginEmailPasswordMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(route.dashboard);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error && 'error' in error) {
      setFormErrorMessage(error.error);
    }
  }, [error]);

  const onSubmit = async (data: ValidationSchema) => {
    await login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '310px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Box
          onSubmit={async (e) => {
            e.preventDefault();
            await form.handleSubmit(onSubmit)();
          }}
          component="form"
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <FormText
              label="Пошта"
              type="email"
              placeholder={'Email'}
              form={form}
              name={EFormFields.email}
            />
            <FormPassword
              placeholder="пароль"
              label={{
                labelType: 'TEXT',
                text: 'Пароль',
              }}
              form={form}
              name={EFormFields.password}
            />
            <Typography>{formErrorMessage}</Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
              }}
            ></Box>
            <Button type="submit" variant="contained">
              Увійти
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
