import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';

class LoginForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.loginUser(formValues)
  }

  render () {
    return(
      <Grid textAlign='center' style={{ paddingTop: '22%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'> Login to account </Header>
          <Form error size='large' onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Segment stacked>
              <Field
                component={Form.Input}
                name='email'
                placeholder='E-mail address'
                fluid icon='mail'
                iconPosition='left'
                type='email'
              />
              <Field
                component={Form.Input}
                name='password'
                placeholder='Password'
                fluid
                icon='lock'
                iconPosition='left'
                type='password'
              />

              <Button color='teal' fluid size='large'> Login </Button>
              <Message>
                New to us?
                <Link to='/signup'>
                  Sign Up
                </Link>
              </Message>
              <Message
                color='orange'
                error
                list={this.props.errorMessages}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { errorMessages: state.auth.errorMessages }
}

export default reduxForm({
  form: 'login',
})(connect(
  mapStateToProps,
  { loginUser }
)(LoginForm));
