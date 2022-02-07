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
import { CaptionsMenu } from './CaptionsMenu'
import { useMenuSettings, MenuStates } from './MenuProvider'

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
  const styles = useMenuListContainerStyles();
  const { settings } = useMenuSettings();
  const { currentMenu } = settings

  const renderMenu = (currentMenu: MenuStates) => {
    switch(currentMenu) {
      case 'menu':
        return <MainMenu />
      case 'quality':
        return <QualityMenu />
      // case 'captions':
      //   return <CaptionsMenu />
      default:
        return <MainMenu />
    }
  }

  return (
    <main className={styles.center}>
      <Menu persistOnItemClick>
        <MenuTrigger>
          <Button>Toggle menu</Button>
        </MenuTrigger>

        <MenuPopover>
          {renderMenu(currentMenu)}
        </MenuPopover>
        </Menu>
    </main>
  )
}