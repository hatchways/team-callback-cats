import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { FieldHookConfig, useField, useFormikContext } from 'formik';

interface otherProps {
  options: {
    id: number;
    option: string;
  }[];
}

export const SelectFieldWrapper: React.FC<otherProps & FieldHookConfig<string>> = (props): JSX.Element => {
  const { setFieldValue } = useFormikContext();
  const { name, options} = props;
  const [field, meta] = useField(name);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const errorCheck = Boolean(meta && meta.touched && meta.error);

  return (
    <TextField
      {...field}
      variant="outlined"
      error={errorCheck}
      helperText={errorCheck ? meta.error : ''}
      select
      onChange={handlechange}
    >
      {options.map((gender) => {
        return (
          <MenuItem key={gender.id} value={gender.option}>
            {gender.option}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectFieldWrapper;
