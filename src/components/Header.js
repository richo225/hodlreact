import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import AuthButton from './AuthButton';

class Header extends React.Component {
  render () {
    return (
      <Menu fixed='top' fluid widths={5} size='huge' inverted>
        <Menu.Item as={ Link } to='/' header>
          <Image size='small' src='/logo_2_transparent.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item
          color='teal'
          as={ Link }
          name='dashboard'
          to='/'
          active={this.props.location.pathname === '/'}
        />
        <Menu.Item
          color='teal'
          as={ Link }
          name='portfolio'
          to='portfolio'
          active={this.props.location.pathname === '/portfolio'}
        />
        <Menu.Item
          color='teal'
          as={ Link }
          name='account'
          to='account'
          active={this.props.location.pathname === '/account'}
        />
        <Menu.Item>
          <AuthButton />
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Header);
