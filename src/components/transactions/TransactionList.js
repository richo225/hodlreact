import React, { useEffect, useState } from 'react';
import map from 'lodash/map';
import find from 'lodash/find';
import { Icon, Image, Table } from 'semantic-ui-react';
import api from '../../api/dataClient';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])
  useEffect( () => { fetchTransactions() }, [] )

  const fetchTransactions = async () => {
    const response = await api.get('/transactions')
    const { data } = response.data
    setTransactions(data)
  }

  const renderCoinCells = (transactionId) => {
    const transaction = (find(transactions, { 'id':  transactionId }))
    const { icon_url, symbol } = transaction.relationships.coin.links

    return(
      <>
        <Table.Cell><Image centered src={icon_url} /></Table.Cell>
        <Table.Cell>{symbol}</Table.Cell>
      </>
    )
  }

  const renderTransactionCells = (transactionId) => {
    const transaction = (find(transactions, { 'id':  transactionId }))
    const {
      process, exchange, amount, humanised_price,
      humanised_total_price, created_at, updated_at } = transaction.attributes

    return(
      <>
        <Table.Cell>{process}</Table.Cell>
        <Table.Cell>{exchange.name}</Table.Cell>
        <Table.Cell>{amount}</Table.Cell>
        <Table.Cell>{humanised_price}</Table.Cell>
        <Table.Cell>{humanised_total_price}</Table.Cell>
        <Table.Cell>{created_at}</Table.Cell>
        <Table.Cell>{updated_at}</Table.Cell>
      </>
    )
  }

  return (
    <div>
      <Table celled inverted padded selectable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
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
              {renderCoinCells(transaction.id)}
              {renderTransactionCells(transaction.id)}
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
