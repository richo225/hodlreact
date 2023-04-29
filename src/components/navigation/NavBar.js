import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';
import SideBar from './SideBar';

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Menu fluid widths={7} size='large' inverted>
      <Menu.Item
         as={Link}
         to='/'
         onMouseEnter={() => visible ? setVisible(false) : setVisible(true)} 
        >
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
        name='market'
        to='market'
        active={useLocation().pathname === '/market'}
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
      <Menu.Item>
        <AuthButton />
      </Menu.Item>
  
      <SideBar visible={visible}/>
    </Menu>
  )
}

export default NavBar;
