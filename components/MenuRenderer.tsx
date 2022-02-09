import * as React from 'react';
import {
  Button,
  Menu,
  MenuPopover,
  MenuTrigger,
  makeStyles,
} from '@fluentui/react-components';
import { MainMenu } from '../components/MainMenu'
import { QualityMenu } from '../components/QualityMenu'
import { useMenuSettings, MenuStates } from './MenuProvider'
import { CaptionsMenu } from './CaptionsMenu';
import { CaptionsToggle } from './CaptionsToggle';
import { CaptionsSettings } from './CaptionsSettings';
import { CaptionsSize } from './CaptionsSize';
import { CaptionsColor } from './CaptionsColor';

export const useMenuListContainerStyles = makeStyles({
  container: theme => ({
    backgroundColor: 'rgba(41, 40, 39, 0.8)',
    width: '275px',
    boxShadow: `${theme.shadow16}`,
    borderRadius: '2px',
    color: '#F3F2F1'
  }),
  center: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }),
  buttonStyle: () => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    border: 'none',
    outline: 'none',
    padding: 0
  }),
  backButtonStyle: () => ({
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '8px',
    display: 'flex',
    justifyContent: 'flex-start ' 
  }),
  itemStyle: () => ({
    padding: '8px',
  }),
  itemTooltip: () => ({
    color: '#C8C6C4',
    padding: 0,
  })
});

export function MenuRenderer() {
  const { settings, updateSettings } = useMenuSettings();
  const { currentMenu } = settings

  const renderMenu = (currentMenu: MenuStates) => {
    switch(currentMenu) {
      case 'menu':
        return <MainMenu />
      case 'quality':
        return <QualityMenu />
      case 'captions':
        return <CaptionsToggle />
      case 'captionsSettings':
        return <CaptionsSettings />
      case 'captionsSize':
        return <CaptionsSize />
      case 'captionsColor':
        return <CaptionsColor />
      default:
        return <MainMenu />
    }
  }

  return (
    <Menu persistOnItemClick onOpenChange={(_, data) => {
      if(!data.open) {
        updateSettings({ ...settings, currentMenu: 'menu' })
      }
    }}>
      <MenuTrigger>
        <Button>Playback settings</Button>
      </MenuTrigger>

      <MenuPopover>
        {renderMenu(currentMenu)}
      </MenuPopover>
      </Menu>
  )
}