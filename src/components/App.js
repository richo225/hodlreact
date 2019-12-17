import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import history from '../history';
import { verifyUser } from '../actions/auth';
import NavBar from './navigation/NavBar';
import SignUpForm from './auth/SignUpForm';
import LoginForm from './auth/LoginForm';
import Dashboard from './dashboard/Dashboard';
import Transactions from './transactions/Transactions';
import Portfolio from './portfolio/Portfolio';
import Account from './Account';
import NotFound from './not_found/NotFound';
import PrivateRoute from './routing/PrivateRoute';

const App = (props) => {
  useEffect(() => { props.verifyUser() }, [props] )

  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <PrivateRoute path='/transactions' component={Transactions} />
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
