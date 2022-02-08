import * as React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
} from '@fluentui/react-components';
import { ChevronRight20Regular } from '@fluentui/react-icons';
import { useMenuListContainerStyles } from './MenuRenderer'
import { useMenuSettings } from './MenuProvider'

export function MainMenu() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();

  return (
    <MenuList className={styles.container}>
      <MenuItem className={styles.itemStyle} secondaryContent={settings.quality.replace(/^\w/, (c) => c.toUpperCase())} onClick={() => updateSettings({ ...settings, currentMenu: 'quality' })}>
        Quality
        {/* <div className={styles.buttonStyle}>
          <span>Quality</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.quality.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <ChevronRight20Regular />
          </div>
        </div> */}
      </MenuItem>
      <MenuItem className={styles.itemStyle}>
        <div className={styles.buttonStyle}>
          Keyboard shortcuts
        </div>
      </MenuItem>
    </MenuList>
  )
}