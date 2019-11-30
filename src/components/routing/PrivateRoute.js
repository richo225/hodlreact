import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, isSignedIn, ...options }) => {
  return isSignedIn === true ?
     <Route {...options} component={component} />
    : <Redirect to='login'/>
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps
)(PrivateRoute);
