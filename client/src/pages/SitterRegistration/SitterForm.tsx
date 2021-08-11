import { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';

const SitterForm: FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.formPlaceholder}>
      <h1>This is the sitter registration form</h1>
    </Typography>
  );
};

export default SitterForm;
