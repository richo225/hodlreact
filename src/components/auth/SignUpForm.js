import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

class SignUpForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.registerUser(formValues)
  }

  render () {
    return(
      <Grid textAlign='center' style={{ paddingTop: '5%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'> Sign up for an account </Header>
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
                name='name'
                placeholder='Full Name'
                fluid icon='user circle'
                iconPosition='left'
                type='text'
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
              <Field
                component={Form.Input}
                name='password_confirmation'
                placeholder='Confirm Password'
                fluid
                icon='lock'
                iconPosition='left'
                type='password'
              />

              <Button
                color='teal'
                fluid size='large'
                loading={this.props.isLoading}
              > Sign Up
              </Button>

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
  return {
    errorMessages: state.auth.errorMessages,
    isLoading: state.auth.isLoading
  }
}

export default reduxForm({
  form: 'registration',
})(connect(
  mapStateToProps,
  { registerUser }
)(SignUpForm));
