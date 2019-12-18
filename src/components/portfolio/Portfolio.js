import React, { useState, useEffect } from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import api from '../../api/dataClient';
import PortfolioStatistics from './PortfolioStatistics';
import Holdings from './Holdings';
import CoinChart from './CoinChart';

const Portfolio = (props) => {
  const [portfolioData, setPortfolioData] = useState([])
  const [portfolioDataLoading, setPortfolioDataLoading] = useState(true)

  const [holdings, setHoldings] = useState([])
  const [holdingsLoading, setHoldingsLoading] = useState(true)

  const [selectedCoinioId, setSelectedCoinioId] = useState(145)

  useEffect(
    () => {
      fetchPortfolioData()
      fetchHoldings()
    },
    []
  )

  const fetchPortfolioData = async () => {
    const response = await api.get('/portfolio')
    setPortfolioData(response.data.data.attributes)
    setPortfolioDataLoading(false)
  }

  const fetchHoldings = async () => {
    const response = await api.get('/holdings')
    setHoldings(response.data.data)
    setHoldingsLoading(false)
  }

  return (
    <div>
      <PortfolioStatistics portfolioData={portfolioData} loading={portfolioDataLoading} />
      <Divider section></Divider>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={6}>
            <Holdings setSelectedCoinioId={setSelectedCoinioId} holdings={holdings} />
          </Grid.Column>
          <Grid.Column width={10}>
            <CoinChart selectedCoinioId={selectedCoinioId} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Portfolio;
