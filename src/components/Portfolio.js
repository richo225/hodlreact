import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TransactionList from './transactions/TransactionList';
import TransactionCreate from './transactions/TransactionCreate';
import { showTransactionModal } from '../actions/';

const Portfolio = (props) => {
  return (
    <div>
      <Button onClick={props.showTransactionModal}>Create Transaction</Button>
      <TransactionCreate />
      <Divider></Divider>
      <TransactionList />
    </div>
  )
}

export default connect(
  null,
  { showTransactionModal }
)(Portfolio);
