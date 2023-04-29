import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

const SideBar = (props) => {
  return (
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        direction='left'
        inverted
        vertical
        visible={props.visible}
        width='thin'>

      <Menu.Item href='https://github.com/richo225/hodlreact' target="_blank">
        <Icon name='github' size='large'/>
        App source
      </Menu.Item>
      <Menu.Item href='https://github.com/richo225/hodlmoon_api' target="_blank">
        <Icon name='github' size='large'/>
        API source
      </Menu.Item>
      <Menu.Item href='https://richardbates.dev' target="_blank">
        <Icon name='user circle' size='large'/>
        Richard Bates
      </Menu.Item>
      </Sidebar>
  )
}

export default SideBar;
