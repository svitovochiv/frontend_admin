import React, { useMemo } from 'react';
import {
  FormBaseInput,
  IFormBaseInputProps,
  IFormLabelNode,
} from '../FormBaseInput';
import { BaseInput, IBaseInputProps } from '../../Input';
import { Typography } from '@mui/material';

type FormTextProps = IFormBaseInputProps &
  IBaseInputProps & {
    label?: string;
  };

export const FormText: React.FC<FormTextProps> = ({ label, ...props }) => {
  const Label: IFormLabelNode | undefined = useMemo(() => {
    if (label) {
      return {
        type: 'NODE',
        Node: <Typography>{label}</Typography>,
      };
    }
    return undefined;
  }, [label]);

  return (
    <FormBaseInput
      {...props}
      Label={Label}
      Input={BaseInput}
      inputProps={props}
    />
  );
};
