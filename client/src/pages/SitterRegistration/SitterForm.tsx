import { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';

const SitterForm: FC = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.formPlaceholder}>
      This is the sitter registration form
    </Typography>
  );
};

export default SitterForm;
