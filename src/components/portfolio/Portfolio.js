import React, { useState, useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import api from '../../api/dataClient';
import PortfolioStatistics from './PortfolioStatistics';

const Portfolio = (props) => {
  const [portfolioData, setPortfolioData] = useState([])
  const [portfolioDataLoading, setPortfolioDataLoading] = useState(true)

  useEffect(
    () => {
      fetchPortfolioData()
    },
    []
  )

  const fetchPortfolioData = async () => {
    const response = await api.get('/portfolio')
    setPortfolioData(response.data.data.attributes)
    setPortfolioDataLoading(false)
  }

  return (
    <div>
      <PortfolioStatistics portfolioData={portfolioData} loading={portfolioDataLoading} />
      <Divider section></Divider>
    </div>
  )
}

export default Portfolio;
