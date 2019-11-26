import React from 'react';
import PropTypes from 'prop-types';
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
