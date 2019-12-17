import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TransactionList from './TransactionList';
import TransactionCreate from './TransactionCreate';
import { showTransactionModal } from '../../actions/transactions';

const Transactions = (props) => {
  return (
    <div>
      <Button animated='fade' color='teal' size='medium' onClick={props.showTransactionModal}>
        <Button.Content visible>Create Transaction</Button.Content>
        <Button.Content hidden>
          <Icon name='add circle'/>
        </Button.Content>
      </Button>
      <TransactionCreate />
      <Divider></Divider>
      <TransactionList />
    </div>
  )
}

export default connect(
  null,
  { showTransactionModal }
)(Transactions);
