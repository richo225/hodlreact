import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <Container>
      < Header />
      < SignUpForm />
      < LoginForm />
    </Container>
  )
}

export default App;
