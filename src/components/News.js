import React, { useState, useEffect, Fragment } from 'react';
import map from 'lodash/map';
import times from 'lodash/times';
import { Card, Image, Placeholder, Grid, Dimmer, Segment, Loader } from 'semantic-ui-react';

const News = ({ articles, loading }) => {
  return (
    <div>
      {loading ? (
          <Card.Group style={{ padding: '3%' }} centered doubling itemsPerRow={5} stackable>
            {times(5, i =>
              <Card color='teal' centered raised>
                <Segment raised>
                  <Placeholder>
                    <Placeholder.Image square />
                    <Placeholder.Header>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='medium' />
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                </Segment>
              </Card>
            )}
          </Card.Group>
      ) : (
        <Card.Group style={{ padding: '3%' }} centered doubling itemsPerRow={5} stackable>
          {map(articles, (card) => (
            <Card color='teal' centered raised key={card.id} href={card.guid} target="_blank">
              <Image rounded src={card.imageurl} />
              <Card.Content >
                <Card.Header>{card.title}</Card.Header>
                <Card.Meta>{card.categories}</Card.Meta>
                <Card.Description>{card.body}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
       )
      }
    </div>
  )
}



export default News;
