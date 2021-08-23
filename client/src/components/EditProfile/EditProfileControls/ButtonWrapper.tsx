import React from 'react';
import { Button } from '@material-ui/core';
import { FieldHookConfig, useFormikContext } from 'formik';

export const ButtonWrapper: React.FC<FieldHookConfig<string>> = (props): JSX.Element => {
  const { children } = props;
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <Button onClick={handleSubmit} variant="contained" color="primary" size="large">
      {children}
    </Button>
  );
};

export default ButtonWrapper;
