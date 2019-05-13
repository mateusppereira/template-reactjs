import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user.auth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/i", state: { from: props.location } }} />
      )
    }
  />
);

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps, null)(PrivateRoute);
