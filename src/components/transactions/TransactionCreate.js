import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Form, Grid, Header, Message, Modal, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import api from '../../api/dataClient';

const TransactionCreate = (props) => {
  const [coins, setCoins] = useState([])
  const [exchanges, setExchanges] = useState([])

  useEffect(() => {
    fetchCoins()
    fetchExchanges()
  }, [])

  const fetchCoins = async () => {
    const response = await api.get('/coins')
    setCoins(response.data.data)
  }

  const fetchExchanges = async () => {
    const response = await api.get('/exchanges')
    setExchanges(response.data.data)
  }

  const dropdownCoins = coins.map((coin) => {
    return {
      key: coin.id,
      text: coin.attributes.name,
      value: coin.id,
      image: { avatar: true, src: coin.attributes.icon_url }
    }
  })

  const dropdownExchanges = exchanges.map((exchange) => {
    return {
      key: exchange.id,
      text: exchange.attributes.name,
      value: exchange.id,
    }
  })

  const onSubmit = (formValues) => {
    console.log(formValues)
  }

  return (
    <div>
      <Modal trigger={props.trigger} >
      <Grid textAlign='center' style={{ padding: '10%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'> Create transaction </Header>
          <Form error size='large' onSubmit={props.handleSubmit(onSubmit)}>
            <Segment stacked>
              <Form.Group inline>
                <Field
                  component={Form.Input}
                  label='buy'
                  name='process'
                  value='buy'
                  type='radio'
                />
                <Field
                  component={Form.Input}
                  label='sell'
                  name='process'
                  value='sell'
                  type='radio'
                />
              </Form.Group>
              <Field
                component={Form.Dropdown}
                selection
                placeholder='Select Coin'
                options={dropdownCoins}
              />
              <Field
                component={Form.Input}
                name='amount'
                placeholder='Amount'
                type='number'
              />
              <Field
                component={Form.Input}
                icon='eur'
                iconPosition='left'
                name='price'
                placeholder='Price'
                type='number'
              />
              <Field
                component={Form.Dropdown}
                selection
                placeholder='Select Coin'
                options={dropdownExchanges}
              />

              <Button
                color='teal'
                fluid size='large'
                loading={props.isLoading}
              > Create
              </Button>

              <Message
                color='orange'
                error
                list={props.errorMessages}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      </Modal>
    </div>
  )
}

export default reduxForm({
  form: 'createTransaction'
})(TransactionCreate);
