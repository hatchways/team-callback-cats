import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Route, Redirect } from 'react-router-dom';
type Props = {
  children: JSX.Element;
  path: string;
};
const ProtectedRoute: React.FC<Props> = ({ children, ...restOfProps }) => {
  return <Route {...restOfProps} render={() => (true ? children : <Redirect to="/login" />)} />;
};
export default ProtectedRoute;
