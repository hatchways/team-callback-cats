import { FormikHelpers } from 'formik';
import login from '../helpers/APICalls/login';
import register from '../helpers/APICalls/register';
import { useAuth } from './useAuthContext';
import { useSnackBar } from './useSnackbarContext';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

interface returnType {
  handleSubmit_login: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
  handleSubmit_signup: (
    {
      email,
      password,
      username,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
  logInAsDemoUser: () => void;
}

export function useLoginAndSignup(): returnType {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const handleSubmit_login = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const handleSubmit_signup = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const logInAsDemoUser = useCallback(() => {
    const demoUser = {
      demoEmail: 'demoUser12@demo.com',
      demoPassword: 'password',
    };
    const { demoEmail, demoPassword } = demoUser;
    login(demoEmail, demoPassword).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
    history.push('/dashboard');
  }, [history, updateSnackBarMessage, updateLoginContext]);

  return { handleSubmit_login, handleSubmit_signup, logInAsDemoUser };
}
