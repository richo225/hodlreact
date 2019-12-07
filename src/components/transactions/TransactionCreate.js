import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Message, Modal, Segment } from 'semantic-ui-react';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import api from '../../api/dataClient';
import { createTransaction } from '../../actions/transactions';
import { hideTransactionModal } from '../../actions/transactions';

const TransactionCreate = (props) => {
  useEffect(() => {
    register({ name: "process" }, { required: true });
    register({ name: "coin_id" });
    register({ name: "amount" }, { required: true });
    register({ name: "price" }, { required: true });
    register({ name: "exchange_id" });
  }, [])

  const [coins, setCoins] = useState([])
  const [exchanges, setExchanges] = useState([])
  const { register, setValue, handleSubmit } = useForm();


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

  const onSubmit = formValues => {
    props.createTransaction({transaction: formValues})
  }

  return (
    <div>
      <Modal style={{ maxWidth: 450 }} open={props.showModal} closeIcon onClose={props.hideTransactionModal}>
        <Form error size='large' onSubmit={handleSubmit(onSubmit)}>
          <Segment inverted stacked>
            <Form.Group>
              <Form.Input
                label='Buy'
                name='process'
                value='buy'
                type='radio'
                onChange={(e, { name, value }) => { setValue(name, value) }}
              />
              <Form.Input
                label='Sell'
                name='process'
                value='sell'
                type='radio'
                onChange={(e, { name, value }) => { setValue(name, value) }}
              />
            </Form.Group>

            <Form.Select
              name='coin_id'
              placeholder='Select coin'
              search
              onClick={fetchCoins}
              options={dropdownCoins}
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Input
              name='amount'
              placeholder='Amount'
              type='number'
              step='any'
              min='0'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Input
              icon='eur'
              iconPosition='left'
              name='price'
              placeholder='Price'
              type='number'
              step='any'
              min='0'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Select
              name='exchange_id'
              placeholder='Select exchange'
              search
              onClick={fetchExchanges}
              options={dropdownExchanges}
              onChange={(e, { name, value }) => { setValue(name, value) }}
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
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    errorMessages: state.transactions.errorMessages,
    isLoading: state.transactions.isLoading,
    showModal: state.transactions.showModal
  }
}

export default connect(
  mapStateToProps,
  { createTransaction, hideTransactionModal }
)(TransactionCreate);
