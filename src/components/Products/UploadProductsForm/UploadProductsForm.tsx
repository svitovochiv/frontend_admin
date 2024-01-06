import React from 'react';
import { useUploadProducts } from '../../../hooks';
import { FileInput, MButton } from '../../Base';
import styles from './UploadProductsForm.module.scss';
import { Box, Typography } from '@mui/material';
import { FontColor } from '../../../enum/color';

export const UploadProductsForm = () => {
  const { title, selectFile, sendProducts, error } = useUploadProducts();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await sendProducts();
      }}
      className={styles.container}
    >
      <p>Оберіть файл з продуктами</p>
      <FileInput label={title} onChange={selectFile} />
      <MButton variant="submit" type="submit">
        Відправити
      </MButton>
      {error && (
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Typography
            sx={{
              color: FontColor.RED,
              fontWeight: '500',
            }}
          >
            Помилка
          </Typography>
          {error.errorMessages.map(({ message }) => (
            <Typography>{message}</Typography>
          ))}
        </Box>
      )}
    </form>
  );
};
