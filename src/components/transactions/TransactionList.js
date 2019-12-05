import React, { useEffect, useState } from 'react';
import map from 'lodash/map';
import { Icon, Table } from 'semantic-ui-react';
import api from '../../api/dataClient';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])
  const [coin, setCoin] = useState([])

  useEffect( () => { fetchTransactions() }, [] )

  const fetchTransactions = async () => {
    const response = await api.get('/transactions')
    const { data } = response.data
    setTransactions(data)
  }

  return (
    <div>
      <Table celled inverted padded selectable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Process</Table.HeaderCell>
            <Table.HeaderCell>Exchange</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Total price</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Updated</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {map(transactions, (transaction) => (
            <Table.Row key={transaction.id} textAlign='center'>
              <Table.Cell>{transaction.attributes.process}</Table.Cell>
              <Table.Cell>{transaction.attributes.exchange}</Table.Cell>
              <Table.Cell>{transaction.attributes.amount}</Table.Cell>
              <Table.Cell>{transaction.attributes.humanised_price}</Table.Cell>
              <Table.Cell>{transaction.attributes.humanised_total_price}</Table.Cell>
              <Table.Cell>{transaction.attributes.created_at}</Table.Cell>
              <Table.Cell>{transaction.attributes.updated_at}</Table.Cell>
              <Table.Cell>
                <Icon name='edit' color='teal' size='big'></Icon>
                <Icon name='delete' color='orange' size='big'></Icon>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TransactionList;
