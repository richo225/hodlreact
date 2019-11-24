import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <Container>
      < Header />
      < LoginForm />
    </Container>
  )
}

export default App;
