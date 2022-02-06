import * as React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
} from '@fluentui/react-components';
import { ChevronRight20Regular } from '@fluentui/react-icons';
import { useMenuListContainerStyles, MenuStates } from '../pages/index'
import { useMenuSettings } from './MenuProvider'

export function MainMenu() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();

  return (
    <MenuList className={styles.container}>
      <MenuItem className={styles.itemStyle}>
        <Button className={styles.buttonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captions' })}>
          <span>Captions (Alt + C)</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.captionsToggle ? 'Auto CC' : 'Off'}</span>
            <ChevronRight20Regular />
          </div>
        </Button>
      </MenuItem>
      <MenuItem className={styles.itemStyle}>
        <Button onClick={() => updateSettings({ ...settings, currentMenu: 'quality' })} className={styles.buttonStyle}>
          <span>Quality</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.quality.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <ChevronRight20Regular />
          </div>
        </Button>
      </MenuItem>
      <MenuItem className={styles.itemStyle}>
        <Button className={styles.buttonStyle}>
          Keyboard shortcuts
        </Button>
      </MenuItem>
    </MenuList>
  )
}