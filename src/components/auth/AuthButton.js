import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../../actions/auth';

const AuthButton = (props) => {
  const handleClick = () => {
    if(props.isSignedIn) { props.logoutUser() }
  }

  const handleLink = () => {
    return props.isSignedIn ? null : '/login'
  }

  const renderText = () => {
    return props.isSignedIn ? 'Logout' : 'Login'
  }

  return (
    <React.Fragment>
      <Button
        as={Link}
        to={handleLink}
        loading={props.isLoading}
        inverted
        color='teal'
        onClick={()=> handleClick()}
      >
        {renderText()}
      </Button>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isLoading: state.auth.isLoading
  }
}

export default connect(
  mapStateToProps,
  { logoutUser, loginUser }
)(AuthButton);
