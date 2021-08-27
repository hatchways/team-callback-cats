import React from 'react';
import { TextField } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';

interface otherProps {
  placeholder: string;
  multiline?: boolean;
  rows?: number;
}

const TextFieldWrapper: React.FC<otherProps & FieldHookConfig<string>> = (props): JSX.Element => {
  const { name, placeholder, multiline, rows } = props;
  const [field, meta] = useField(name);

  const errorCheck = Boolean(meta && meta.touched && meta.error);

  return (
    <TextField
      {...field}
      variant="outlined"
      placeholder={placeholder}
      error={errorCheck}
      helperText={errorCheck ? meta.error : ''}
      multiline={multiline ? true : false}
      rows={!rows ? undefined : rows}
    />
  );
};

export default TextFieldWrapper;
