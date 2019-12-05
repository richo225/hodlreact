import React, { useState, useEffect, Fragment } from 'react';
import map from 'lodash/map';
import pick from 'lodash/pick';
import take from 'lodash/take';
import { Card, Divider, Image, Placeholder, Statistic } from 'semantic-ui-react';
import api from '../api/dataClient';

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
  const [loading, setLoading] = useState(true)

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
  }

  const fetchArticles = async () => {
    const response = await api.get('/news')
    setArticles(take(response.data, 5))
    setLoading(false)
  }

  return (
    <div>
      <Statistic.Group style={{ paddingTop: '2%' }} widths='five' size='small' color='teal'>
        <Statistic label={'BTC dominance'} value={marketData.btc_dominance} />
        <Statistic label={'ETH dominance'} value={marketData.eth_dominance} />
        <Statistic label={'Active cryptocurrencies'} value={marketData.active_cryptocurrencies} />
        <Statistic label={'Active market pairs'} value={marketData.active_market_pairs} />
        <Statistic label={'Active exchanges'} value={marketData.active_exchanges} />
      </Statistic.Group>

      <Divider section></Divider>

      <Card.Group style={{ padding: '3%' }} centered doubling itemsPerRow={5} stackable>
          {map(articles, (card) => (
            <Card color='teal' centered raised key={card.id} href={card.guid} target="_blank">
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image rounded src={card.imageurl} />
              )}

              <Card.Content >
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.title}</Card.Header>
                    <Card.Meta>{card.categories}</Card.Meta>
                    <Card.Description>{card.body}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
    </div>
  )
}

export default Dashboard;
