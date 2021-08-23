import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, CssBaseline, Grid, Typography, Paper } from '@material-ui/core';
import TextField from './EditProfileControls/TextFieldWrapper';
import SelectFieldWrapper from './EditProfileControls/SelectFieldWrapper';
import DatePicker from './EditProfileControls/DatePicker';
import ButtonWrapper from './EditProfileControls/ButtonWrapper';
import useStyles from './useStyles';

const initialFormState = {
  firstName: '',
  lastName: '',
  gender: 'Male',
  birthDate: '',
  email: '',
  phoneNumber: '',
  address: '',
  about: '',
};
const genderOptions = [
  { id: 1, option: 'Male' },
  { id: 2, option: 'Female' },
  { id: 3, option: 'Other' },
];
const formValidation = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  gender: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phoneNumber: yup
    .number()
    .integer()
    .positive('Please enter a valid phone number')
    .typeError('Please enter a valid phone number')
    .required('Required'),
  address: yup.string().required('Required'),
  about: yup.string().required('Required'),
});
const EditProfileForm = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Container>
          <Formik
            initialValues={{
              ...initialFormState,
            }}
            validationSchema={formValidation}
            onSubmit={(values) => {
              console.log('Updated details:', values);
            }}
          >
            <Paper elevation={6}>
              <Form>
                <CssBaseline>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h4">Edit Profile</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">FIRST NAME</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="firstName" placeholder="John" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">LAST NAME</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="lastName" placeholder="Doe" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">GENDER</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <SelectFieldWrapper name="gender" fullwidth={false} options={genderOptions} />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">BIRTH DATE</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <DatePicker name="birthDate" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">EMAIL ADDRESS</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="email" placeholder="john-doe@gmail.com" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">PHONE NUMBER</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="phoneNumber" placeholder="Phone" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">WHERE YOU LIVE</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="address" placeholder="Address" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6">DESCRIBE YOURSELF</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField name="about" placeholder="About you" multiline={true} rows={5} />
                    </Grid>
                    <Grid item xs={12}>
                      <ButtonWrapper name="about">SAVE</ButtonWrapper>
                    </Grid>
                  </Grid>
                </CssBaseline>
              </Form>
            </Paper>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EditProfileForm;
