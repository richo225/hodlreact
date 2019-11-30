import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import history from '../history';
import { verifyUser } from '../actions';
import NavBar from './NavBar';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Account from './Account';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './routing/PrivateRoute';

const App = (props) => {
  useEffect(() => { props.verifyUser() }, [] )

  return (
    <Router history={history}>
      < NavBar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <PrivateRoute path='/portfolio' component={Portfolio} />
        <PrivateRoute path='/account' component={Account} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default connect(
  null,
  { verifyUser }
)(App);
