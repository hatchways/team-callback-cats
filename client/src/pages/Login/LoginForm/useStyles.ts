import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '80%', // Fix IE 11 issue.
    margin: '2rem auto 1rem',
  },
  label: {
    fontSize: 10,
    margin: '.5rem 0 -.5rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: 'rgb(0,0,0)',
  },
  inputs: {
    height: '2rem',
    padding: '5px 10px',
  },
  forgot: {
    paddingRight: 10,
    color: '#ed4740',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 140,
    height: 46,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    marginTop: '2rem',
    backgroundColor: '#ed4740',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
