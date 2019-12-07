import React, { Fragment } from 'react';
import { Statistic, Placeholder, Progress } from 'semantic-ui-react';

const MarketStatistics = ({ marketData, loading }) => {
  return (
    <div>
      {loading ? (
        <div style={{ padding: '1%' }}>
          <Progress percent={100} active size='large'>
            Loading
          </Progress>
        </div>
      ) : (
        <Statistic.Group style={{ paddingTop: '2%' }} widths='five' size='small' color='teal'>
          <Statistic label={'BTC dominance'} value={marketData.btc_dominance} />
          <Statistic label={'ETH dominance'} value={marketData.eth_dominance} />
          <Statistic label={'Active cryptocurrencies'} value={marketData.active_cryptocurrencies} />
          <Statistic label={'Active market pairs'} value={marketData.active_market_pairs} />
          <Statistic label={'Active exchanges'} value={marketData.active_exchanges} />
        </Statistic.Group>
      )}
    </div>
  )
}

export default MarketStatistics;
