import React from 'react';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';

const Dropdownbar = (props) => {
  return (
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        direction='bottom'
        inverted
        horizontal
        visible={props.visible}
        width='thin'>

        <Menu.Item>
          <Button color='white' inverted target="_blank" href='https://github.com/richo225/hodlreact'>
            <Icon name='github' size='large'/>
            App source
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button color='white' inverted target="_blank" href='https://github.com/richo225/hodlmoon_api'>
            <Icon name='github' size='large'/>
            Api source
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button
            inverted
            color='grey'
            target="_blank"
            href='https://en.cryptobadges.io/donate/0x5aa9a264fF5516E615eB60b43d524F04c13a331e'>
            <Icon name='ethereum' size='large' color='white'/>
            Donate
          </Button>
        </Menu.Item>

        <Menu.Item as='a'>
          <Button
            color='teal'
            target="_blank"
            href='https://en.cryptobadges.io/donate/0x5aa9a264fF5516E615eB60b43d524F04c13a331e'>
            0x5aa9a264fF5516E615eB60b43d524F04c13a331e
          </Button>
        </Menu.Item>
      </Sidebar>
  )
}

export default Dropdownbar;
