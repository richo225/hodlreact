import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

class Dashboard extends React.Component {
  render () {
    return(
      <Header
      as='h2'
      color='teal'
      textAlign='center'
      style={{ lineHeight: '30em' }}
      >
      Dashboard
      </Header>
    )
  }
}

export default Dashboard;
