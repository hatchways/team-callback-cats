import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Typography, Paper, MenuItem } from '@material-ui/core';
import TextField from './EditProfileControls/TextFieldWrapper';
import ButtonWrapper from './EditProfileControls/ButtonWrapper';
import useStyles from './useStyles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

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
const genderCategories = [
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
  const { root, formContainer, formCaption, padding, label, formInput, submitBtn } = classes;
  return (
    <Grid container className={root}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Container className={formContainer}>
          <Formik
            initialValues={{
              ...initialFormState,
            }}
            validationSchema={formValidation}
            onSubmit={(values) => {
              //submit handler
              console.log(values);
            }}
          >
            <Paper elevation={6}>
              <ScopedCssBaseline>
                <Form className={padding}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography className={formCaption} variant="h4">
                        Edit Profile
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        First name
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="firstName" placeholder="John" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Last name
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="lastName" placeholder="Doe" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Gender
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="gender" select>
                        {genderCategories.map((gender) => {
                          return (
                            <MenuItem key={gender.id} value={gender.option}>
                              {gender.option}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Birth date
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="birthDate" InputLabelProps={{ shrink: true }} type="date"></TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Email address
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="email" placeholder="john-doe@gmail.com" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Phone number
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="phoneNumber" placeholder="Phone" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Where you live
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="address" placeholder="Address" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        Describe yourself
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextField name="about" placeholder="About you" multiline={true} rows={5} />
                    </Grid>
                    <Grid className={submitBtn} item xs={12}>
                      <ButtonWrapper variant="contained" color="primary" size="large">
                        Save
                      </ButtonWrapper>
                    </Grid>
                  </Grid>
                </Form>
              </ScopedCssBaseline>
            </Paper>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EditProfileForm;
