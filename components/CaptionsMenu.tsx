import * as React from 'react';
import {
  Button,
  Divider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
  MenuItem,
} from '@fluentui/react-components';
import { ChevronLeft24Regular, ChevronRight24Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function CaptionsMenu() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();

  return (
    <MenuList className={styles.container}>
      <MenuItem secondaryContent={settings.captionsToggle ? 'On' : 'Off'} onClick={() => updateSettings({ ...settings, currentCaptionsMenu: 'menu' })}>
        <div className={styles.buttonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captions' })}>
          <span>Captions (Alt + C)</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.captionsToggle ? 'Auto CC' : 'Off'}</span>
            <ChevronLeft24Regular />
          </div>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={styles.buttonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captions' })}>
          <span>Settings</span>
          <ChevronRight24Regular />
        </div>
      </MenuItem>
    </MenuList>
  )
}