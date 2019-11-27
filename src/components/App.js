import React from 'react';
import { Router, Route } from 'react-router-dom';
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

const App = (props) => {
  useEffect(() => { props.verifyUser() }, [] )

  return (
    <Router history={history}>
      < NavBar />
      <Route path='/' exact component={Dashboard} />
      <Route path='/portfolio' exact component={Portfolio} />
      <Route path='/account' exact component={Account} />
      <Route path='/signup' exact component={SignUpForm} />
      <Route path='/login' exact component={LoginForm} />
    </Router>
  )
}

export default connect(
  null,
  { verifyUser }
)(App);
