import React from 'react';
import { TextField } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';

export const DatePicker: React.FC<FieldHookConfig<string>> = (props): JSX.Element => {
  const { name } = props;
  const [field, meta] = useField(name);
  const errorCheck = meta && meta.touched && meta.error;

  return (
    <TextField
      {...field}
      type={'date'}
      fullWidth={true}
      variant="outlined"
      error={errorCheck ? true : false}
      helperText={errorCheck ? meta.error : ''}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default DatePicker;
