import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';
import PropTypes from 'prop-types';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/'} />
          : <Component {...componentProps} />
      )}
    />
  );
}

PublicOnlyRoute.propTypes = {
  component: PropTypes.any
};