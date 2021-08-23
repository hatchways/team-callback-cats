import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    '& div.MuiContainer-root': {
      width: 770,
      margin: theme.spacing(0, 'auto'),
      '& h4': {
        textAlign: 'center',
        margin: theme.spacing(0, 'auto', 4, 'auto'),
      },
      '& h6': {
        fontSize: '.7rem',
        textAlign: 'right',
        fontWeight: 800,
        marginTop: 14,
      },
      '& .MuiOutlinedInput-root': { marginRight: 20, width: 370 },
      '& form': { padding: theme.spacing(8, 0, 8, 3) },
      '& button': {
        display: 'block',
        backgroundColor: colors.red[400],
        margin: theme.spacing(3, 'auto'),
        padding: theme.spacing('1rem', 9),
      },
    },
  },
}));

export default useStyles;
