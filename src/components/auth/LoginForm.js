import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Divider, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/auth';

const LoginForm = (props) => {
  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [])

  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = formValues => {
    props.loginUser(formValues)
  }

  return(
    <Grid textAlign='center' style={{ paddingTop: '5%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'> Login to account </Header>
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
              name='password'
              placeholder='Password'
              fluid
              icon='lock'
              iconPosition='left'
              type='password'
              onChange={(e, { name, value }) => { setValue(name, value) }}
            />

            <Button
              color='teal'
              fluid size='large'
              loading={props.isLoading}>
              Login
            </Button>
            <Divider horizontal>Or</Divider>
            <Button
              as={ Link }
              color='teal'
              fluid size='large'
              loading={props.isLoading}
              to='/signup'>
              Sign Up
            </Button>
            <Message
              color='orange'
              error
              list={props.errorMessages} />
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
  { loginUser }
)(LoginForm);
