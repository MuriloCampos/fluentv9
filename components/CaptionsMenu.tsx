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
      <MenuItem secondaryContent={settings.captionsToggle ? 'On' : 'Off'} onClick={() => updateSettings({ ...settings, currentCaptionsMenu: 'captions-toggle' })}>Captions / Subtitles</MenuItem>
      <MenuItem>Captions / Subtitles settings</MenuItem>
    </MenuList>
  )
}