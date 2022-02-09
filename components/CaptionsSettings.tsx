import * as React from 'react';
import {
  Button,
  MenuDivider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
  MenuItem,
} from '@fluentui/react-components';
import { Switch } from '@fluentui/react-switch';
import { ChevronLeft24Regular, ChevronRight20Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function CaptionsSettings() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();
  const [switchValue, setSwitchValue] = React.useState(settings.captionsBackgroundTransparency)
  
  return (
    <MenuList className={styles.container}>
      <Button aria-roledescription='back to captions menu' className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captions' })}>
        <ChevronLeft24Regular />
        {`Settings`}
      </Button>
      <MenuDivider />

      <MenuItem className={styles.itemStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captionsSize', previousMenu: 'captionsSettings' })}>
        <div className={styles.buttonStyle}>
          <span>Size</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.captionsSize.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <ChevronRight20Regular style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>

      <MenuItem className={styles.itemStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captionsColor', previousMenu: 'captionsSettings' })}>
        <div className={styles.buttonStyle}>
          <span>Color</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip}>{settings.captionsColor.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <ChevronRight20Regular style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>

      <div className={styles.itemStyle}>
        <div className={styles.buttonStyle}>
          <span>Background transparency</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.itemTooltip} style={{ marginRight: 8 }}>{settings.captionsBackgroundTransparency ? 'On' : 'Off'}</span>
            <Switch onKeyDown={e => {
              if (e.key === 'Enter') {
                setSwitchValue(current => !current)
                updateSettings({ ...settings, captionsBackgroundTransparency: !settings.captionsBackgroundTransparency })
              }
            }} checked={switchValue} onChange={(e, data) => {
              setSwitchValue(data.checked)
              updateSettings({ ...settings, captionsBackgroundTransparency: data.checked })
            }} />
          </div>
        </div>
      </div>

    </MenuList>
  )
}