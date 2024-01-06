import { ChangeEvent, useState } from 'react';
import { useUploadProductsMutation } from '../api';
import { isRTKError } from '../interfaces';

export const useUploadProducts = () => {
  const [uploadProducts, { error }] = useUploadProductsMutation();

  const [file, setFile] = useState<File>();

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const title = file?.name || 'Оберіть файл';

  const sendProducts = async () => {
    if (file) {
      await uploadProducts({ file });
      console.log('sendProducts: ', file?.name);
    }
  };
  const validatedError = isRTKError(error) ? error.data : undefined;
  return {
    title,
    selectFile,
    sendProducts,
    error: validatedError,
  };
};
