import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navigation/Navbar';
import SitterForm from './pages/SitterRegistration/SitterForm';
import Jobs from './pages/Jobs/Jobs';
import Sitters from './pages/Sitters/Sitters';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Navbar />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/demo" component={Dashboard} />
                <ProtectedRoute exact path="/dashboard">
                  <Dashboard />
                </ProtectedRoute>
                <Route exact path="/become-a-sitter" component={SitterForm} />
                <ProtectedRoute exact path="/my-jobs">
                  <Jobs />
                </ProtectedRoute>
                <ProtectedRoute exact path="/my-sitters">
                  <Sitters />
                </ProtectedRoute>
                <ProtectedRoute exact path="/messages">
                  <Messages />
                </ProtectedRoute>
                <ProtectedRoute exact path="/profile">
                  <Profile />
                </ProtectedRoute>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
