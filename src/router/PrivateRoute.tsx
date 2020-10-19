import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { Paths } from './constants';

interface IProps {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact: boolean;
  auth: boolean;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return auth ? <Redirect to={Paths.login} /> : <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
