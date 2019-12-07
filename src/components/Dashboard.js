import React, { useState, useEffect, Fragment } from 'react';
import map from 'lodash/map';
import pick from 'lodash/pick';
import take from 'lodash/take';
import { Card, Divider, Image, Placeholder } from 'semantic-ui-react';
import api from '../api/dataClient';
import MarketStatistics from './MarketStatistics';
import News from './News';

const Dashboard = () => {
  const DATA_KEYS = [
    'btc_dominance',
    'eth_dominance',
    'active_cryptocurrencies',
    'active_market_pairs',
    'active_exchanges',
  ]
  const [marketData, setMarketData] = useState([])
  const [articles, setArticles] = useState([])
  const [marketDataLoading, setMarketDataLoading] = useState(true)
  const [articlesLoading, setArticlesLoading] = useState(true)

  useEffect(
    () => {
      fetchMarketData()
      fetchArticles()
    },
    []
  )

  const fetchMarketData = async () => {
    const response = await api.get('/market_data')
    setMarketData(pick(response.data, DATA_KEYS))
    setMarketDataLoading(false)
  }

  const fetchArticles = async () => {
    const response = await api.get('/news')
    setArticles(take(response.data, 5))
    setArticlesLoading(false)
  }

  return (
    <div>
      <MarketStatistics marketData={marketData} loading={marketDataLoading} />
      <Divider section></Divider>
      <News articles={articles} loading={articlesLoading} />
    </div>
  )
}

export default Dashboard;
