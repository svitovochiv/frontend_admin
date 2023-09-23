import React, { InputHTMLAttributes } from 'react';
import { MButton } from '../Button';

type FileInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type CustomFileInputProps = {
  label?: string;
};

export const FileInput: React.FC<FileInputProps & CustomFileInputProps> = ({
  label,
  ...props
}) => {
  return (
    <MButton>
      <label>
        {label}
        <input type="file" accept=".xlsx, .xls" hidden {...props} />
      </label>
    </MButton>
  );
};
