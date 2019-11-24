import React from 'react';
import { Menu, Image, Button } from 'semantic-ui-react';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => { this.setState({activeItem: name}) }

  render () {
    return (
      <Menu fixed='top' fluid widths={6} size='huge' inverted>
        <Menu.Item as='a' header>
          <Image size='small' src='/logo_2_transparent.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item
          color='teal'
          as='a'
          name='home'
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as='a'
          name='dashboard'
          active={this.state.activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as='a'
          name='portfolio'
          active={this.state.activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='teal'
          as='a'
          name='account'
          active={this.state.activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <Menu.Item>
          <Button inverted color='teal'>Logout</Button>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header;
