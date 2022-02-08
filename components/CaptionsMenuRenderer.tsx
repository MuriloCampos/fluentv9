import * as React from 'react';
import {
  Button,
  Menu,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import { CaptionsToggle } from '../components/CaptionsToggle'
import { CaptionsMenu } from '../components/CaptionsMenu'
import { useMenuSettings, CaptionsMenuStates } from './MenuProvider'

export function CaptionsMenuRenderer() {
  const { settings, updateSettings } = useMenuSettings();
  const { currentCaptionsMenu } = settings

  const renderMenu = (currentMenu: CaptionsMenuStates) => {
    switch(currentMenu) {
      case 'menu':
        return <CaptionsMenu />
      case 'captions-toggle':
        return <CaptionsToggle />
      default:
        return <CaptionsMenu />
    }
  }

  return (
    <Menu persistOnItemClick  onOpenChange={(_, data) => {
      if(!data.open) {
        updateSettings({ ...settings, currentCaptionsMenu: 'menu' })
      }
    }}>
      <MenuTrigger>
        <Button>Captions settings</Button>
      </MenuTrigger>

      <MenuPopover>
        {renderMenu(currentCaptionsMenu)}
      </MenuPopover>
      </Menu>
  )
}