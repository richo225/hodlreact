import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class SignUpForm extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues)
  }

  render () {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'> Login to your account </Header>
          <Form size='large' onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Segment stacked>
              <Field
                component={Form.Input}
                name='email'
                placeholder='E-mail address'
                fluid icon='user'
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

              <Button color='teal' fluid size='large'> Sign Up </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({
  form: 'login'
})(SignUpForm);
