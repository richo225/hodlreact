import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

const NavBar = () => {
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
        active={useLocation().pathname === '/'}
      />
      <Menu.Item
        color='teal'
        as={ Link }
        name='portfolio'
        to='portfolio'
        active={useLocation().pathname === '/portfolio'}
      />
      <Menu.Item
        color='teal'
        as={ Link }
        name='account'
        to='account'
        active={useLocation().pathname === '/account'}
      />
      <Menu.Item>
        <AuthButton />
      </Menu.Item>
    </Menu>
  )
}

export default NavBar;
