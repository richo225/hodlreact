
import React from 'react';
import { Statistic, Progress } from 'semantic-ui-react';

const PortfolioStatistics = ({ portfolioData, loading }) => {
  return (
    <div>
      {loading ? (
        <div style={{ padding: '1%' }}>
          <Progress percent={100} active size='large'>
            Loading
          </Progress>
        </div>
      ) : (
        <Statistic.Group style={{ paddingTop: '1%' }} widths='five' size='mini' color='teal'>
          <Statistic label={'Total holdings'} value={portfolioData.humanised_total_holdings_price} />
          <Statistic label={'Total profit'} value={portfolioData.humanised_total_profit_loss} />
          <Statistic label={'Price change 1h'} value={portfolioData.humanised_total_price_change_1h} />
          <Statistic label={'Price change 24h'} value={portfolioData.humanised_total_price_change_24h} />
          <Statistic label={'Price change 7d'} value={portfolioData.humanised_total_price_change_7d} />
        </Statistic.Group>
      )}
    </div>
  )
}

export default PortfolioStatistics;
