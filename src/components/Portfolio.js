import React from 'react';
import { Header } from 'semantic-ui-react';

class Portfolio extends React.Component {
  render () {
    return(
      <Header
      as='h2'
      color='teal'
      textAlign='center'
      style={{ lineHeight: '30em' }}
      >
      Portfolio
      </Header>
    )
  }
}

export default Portfolio;
