import React from 'react';
import { Statistic, Progress } from 'semantic-ui-react';

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
          <Statistic label={'BTC dominance'} value={parseFloat(marketData.btc_dominance.toPrecision(5))} />
          <Statistic label={'ETH dominance'} value={parseFloat(marketData.eth_dominance.toPrecision(5))} />
          <Statistic label={'Active cryptocurrencies'} value={marketData.active_cryptocurrencies} />
          <Statistic label={'Active market pairs'} value={marketData.active_market_pairs} />
          <Statistic label={'Active exchanges'} value={marketData.active_exchanges} />
        </Statistic.Group>
      )}
    </div>
  )
}

export default MarketStatistics;
