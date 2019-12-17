import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';
import DropdownBar from './DropdownBar';

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Menu fluid widths={6} size='huge' inverted>
      <Menu.Item onClick={() => { visible ? setVisible(false) : setVisible(true) } } >
        <Image size='small' src='/logo_2_transparent.png' style={{ marginRight: '1.5em' }} />
      </Menu.Item>
      <DropdownBar visible={visible}/>
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
        name='transactions'
        to='transactions'
        active={useLocation().pathname === '/transactions'}
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
      <Menu.Item onClick={() => { visible ? setVisible(false) : setVisible(true) } }>
        <AuthButton />
      </Menu.Item>
    </Menu>
  )
}

export default NavBar;
