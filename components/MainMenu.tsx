import * as React from 'react';
import {
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
      <MenuItem onClick={() => {
        const currentNavigation = [...settings.menuNavigation]
        currentNavigation.push('captions')
        updateSettings({ ...settings, menuNavigation: [...currentNavigation] })
      }}>
        <div className={styles.buttonStyle}>
          <span>Captions (Alt + C)</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.captionsToggle ? 'Auto CC' : 'Off'}</span>
            <ChevronRight20Regular style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>
      <MenuItem className={styles.itemStyle} onClick={() => {
        const currentNavigation = [...settings.menuNavigation]
        currentNavigation.push('quality')
        updateSettings({ ...settings, menuNavigation: [...currentNavigation] })
      }}>
        <div className={styles.buttonStyle}>
          <span>Quality</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.quality.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <ChevronRight20Regular style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>
      <MenuItem className={styles.itemStyle}>
        <div className={styles.buttonStyle}>
          Keyboard shortcuts
        </div>
      </MenuItem>
    </MenuList>
  )
}