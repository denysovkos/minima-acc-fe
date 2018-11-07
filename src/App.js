import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';

import Home from './Home';
import LoginPage from './pages/login';
import Layout from './components/layout';
import RegisterPage from './pages/register';
import appReducer from './store/reducers/appReducer';
import Dashboard from './pages/dashboard';
import SignOut from './pages/signout';
import Account from './pages/account';
import Settings from './pages/settings';
import DashboardLayout from './components/dashboardLayout';
import DEFAULT_PAGE from './pages/DEFAULT_PAGE';

const store = createStore(appReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const token = sessionStorage.getItem('token');

      return token && token !== ''
      ? <DashboardLayout><Component {...props} /></DashboardLayout>
      : <Redirect to='/login' />
  }
  } />
)

const App = () => (
  <Provider store={store}>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/signout" component={SignOut} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/settings" component={Settings} />

        <PrivateRoute exact path="/docs/statement" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/docs/acts" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/docs/agreements" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/edocs" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/employees/payments" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/employees/book" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/employees/table" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/employees/list" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/declarations/pe" component={DEFAULT_PAGE} />
        <PrivateRoute exact path="/declarations/1df" component={DEFAULT_PAGE} />

      </Layout>
    </Switch>
  </Provider>
);

export default App;
