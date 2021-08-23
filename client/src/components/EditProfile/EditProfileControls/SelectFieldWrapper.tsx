import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { FieldHookConfig, useField, useFormikContext } from 'formik';

interface otherProps {
  options: {
    id: number;
    option: string;
  }[];
  fullwidth: boolean;
}

export const SelectFieldWrapper: React.FC<otherProps & FieldHookConfig<string>> = (props): JSX.Element => {
  const { setFieldValue } = useFormikContext();
  const { name, options, fullwidth } = props;
  const [field, meta] = useField(name);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const errorCheck = meta && meta.touched && meta.error;

  return (
    <TextField
      {...field}
      fullWidth={fullwidth}
      variant="outlined"
      error={errorCheck ? true : false}
      helperText={errorCheck ? meta.error : ''}
      select={true}
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
