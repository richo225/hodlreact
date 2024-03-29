import React from 'react';
import { Button, Card, Form, Grid, Image, Message } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateUser } from '../actions/auth';

class Account extends React.Component {
  onSubmit = (formValues) => {
    this.props.updateUser(formValues)
  }

  render () {
    return(
      <Grid textAlign='center' style={{ paddingTop: '5%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Card raised color='teal'>
            <Image
              rounded
              size='huge'
              src='/vitalik.jpg'
            />
            <Card.Content>
              <Form error size='large' onSubmit={this.props.handleSubmit(this.onSubmit)} >
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
                  name='email'
                  placeholder='E-mail address'
                  fluid icon='mail'
                  iconPosition='left'
                  type='email'
                />

                <Button
                  color='teal'
                  fluid size='large'
                  loading={this.props.isLoading}
                > Update
                </Button>

                <Message
                  color='orange'
                  error
                  list={this.props.errorMessages}
                />
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.auth.currentUser,
    isLoading: state.auth.isLoading,
    errorMessages: state.auth.errorMessages
  }
}

export default connect(
  mapStateToProps,
  { updateUser }
)(reduxForm({
    form: 'accountUpdate',
    enableReinitialize : true
})(Account));
