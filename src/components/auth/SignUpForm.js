import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Divider, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/auth';

const SignUpForm = (props) => {
  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "name" }, { required: true });
    register({ name: "password" }, { required: true });
    register({ name: "password_confirmation" }, { required: true });
  }, [])

  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = formValues => {
    props.registerUser(formValues)
  }

  return(
    <Grid textAlign='center' style={{ paddingTop: '3%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'> Sign up for an account </Header>
        <Form error size='large' onSubmit={handleSubmit(onSubmit)}>
          <Segment stacked>
            <Form.Input
              name='email'
              placeholder='E-mail address'
              fluid icon='mail'
              iconPosition='left'
              type='email'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Input
              name='name'
              placeholder='Full Name'
              fluid icon='user circle'
              iconPosition='left'
              type='text'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Input
              name='password'
              placeholder='Password'
              fluid
              icon='lock'
              iconPosition='left'
              type='password'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />
            <Form.Input
              name='password_confirmation'
              placeholder='Confirm Password'
              fluid
              icon='lock'
              iconPosition='left'
              type='password'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />

            <Button
              color='teal'
              fluid size='large'
              loading={props.isLoading}
            > Sign Up
            </Button>
            <Divider horizontal>Or</Divider>
            <Button
              as={ Link }
              color='teal'
              fluid size='large'
              to='/login'
            > Login
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
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessages: state.auth.errorMessages,
    isLoading: state.auth.isLoading
  }
}

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUpForm);
