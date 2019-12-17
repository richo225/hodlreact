import React from 'react';
import { Icon, Image, Table } from 'semantic-ui-react';
import map from 'lodash/map';
import find from 'lodash/find';

const Holdings = ({ holdings }) => {
  const renderCoinCells = (holdingId) => {
    const holding = (find(holdings, { 'id':  holdingId }))
    const { icon_url, symbol } = holding.relationships.coin.links

    return(
      <>
        <Table.Cell><Image centered src={icon_url} /></Table.Cell>
        <Table.Cell>{symbol}</Table.Cell>
      </>
    )
  }

  const renderHoldingsCells = (holdingId) => {
    const holding = (find(holdings, { 'id':  holdingId }))
    const { total_amount, humanised_total_price, humanised_total_profit_loss } = holding.attributes

    return(
      <>
        <Table.Cell>{total_amount}</Table.Cell>
        <Table.Cell>{humanised_total_price}</Table.Cell>
        <Table.Cell>{humanised_total_profit_loss}</Table.Cell>
      </>
    )
  }

  return (
    <div>
      <Table inverted selectable collapsing>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Holdings</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell>Profit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {map(holdings, (holding) => (
            <Table.Row key={holding.id} textAlign='center'>
              {renderCoinCells(holding.id)}
              {renderHoldingsCells(holding.id)}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </div>
  )
}

export default Holdings;
