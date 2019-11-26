import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../actions';

const AuthButton = (props) => {
  const handleClick = () => {
     props.isSignedIn ? props.logoutUser() : props.loginUser()
  }

  const renderText = () => {
    return props.isSignedIn ? 'Logout' : 'Login'
  }

  return (
    <React.Fragment>
      <Button inverted color='teal' onClick={()=> handleClick()} >
        {renderText()}
      </Button>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps,
  { logoutUser, loginUser }
)(AuthButton);
