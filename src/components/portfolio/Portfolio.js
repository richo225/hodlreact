import React, { useState, useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import api from '../../api/dataClient';
import PortfolioStatistics from './PortfolioStatistics';
import Holdings from './Holdings';
import CoinChart from './CoinChart';

const Portfolio = (props) => {
  const [portfolioData, setPortfolioData] = useState([])
  const [portfolioDataLoading, setPortfolioDataLoading] = useState(true)

  const [holdings, setHoldings] = useState([])
  const [holdingsLoading, setHoldingsLoading] = useState(true)

  const [selectedCoin, setSelectedCoin] = useState('')

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
      <Holdings holdings={holdings} />
      <CoinChart selectedCoin={selectedCoin} />
    </div>
  )
}

export default Portfolio;
