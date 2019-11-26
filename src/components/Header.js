import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => { this.setState({activeItem: name}) }

  render () {
    return (
      <Menu fixed='top' fluid widths={6} size='huge' inverted>
        <Menu.Item as={ Link } to='/' header>
          <Image size='small' src='/logo_2_transparent.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item
          color='teal'
          as={ Link }
          name='home'
          to='/'
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as={ Link }
          name='dashboard'
          to='/'
          active={this.state.activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as={ Link }
          name='portfolio'
          to='portfolio'
          active={this.state.activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as={ Link }
          name='account'
          to='account'
          active={this.state.activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <Menu.Item>
          <AuthButton />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header;
