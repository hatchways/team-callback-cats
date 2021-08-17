import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  label: {
    fontSize: 12,
    margin: '.5rem 0 -.5rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: 'rgb(0,0,0)',
  },
  inputs: {
    height: '2.5rem',
    padding: '5px 10px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#ed4740',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
