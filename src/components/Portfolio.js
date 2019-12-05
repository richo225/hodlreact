import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import TransactionList from './transactions/TransactionList';
import TransactionCreate from './transactions/TransactionCreate';

const Portfolio = () => {
  return (
    <div>
      <TransactionCreate trigger={<Button>Create Transaction</Button>} />
      <Divider></Divider>
      <TransactionList />
    </div>
  )
}

export default Portfolio;
