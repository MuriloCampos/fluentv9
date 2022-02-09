import * as React from 'react';
import {
  Button,
  MenuDivider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
  MenuItem,
} from '@fluentui/react-components';
import { ChevronLeft24Regular, ChevronRight24Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function CaptionsToggle() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captions: [settings.captionsToggle ? 'Auto CC' : 'off']
  });

  const onChange: MenuProps['onCheckedValueChange'] = (e, {
    name,
    checkedItems
  }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1]
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsToggle: newCheckedItem === 'off' ? false : true })
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return (
    <MenuList className={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button aria-roledescription='back to home menu' className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'menu' })}>
        <ChevronLeft24Regular />
        {`Captions (Alt + C)`}
      </Button>
      <MenuDivider />
      <MenuItemCheckbox name="captions" value="off">
        Off
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captions" value="Auto CC">
        Auto CC
      </MenuItemCheckbox>
      <MenuDivider />
      <MenuItem onClick={() => updateSettings({ ...settings, currentMenu: 'captionsSettings', previousMenu: 'captions' })}>
        <Button className={styles.buttonStyle}>
          <span>Settings</span>
          <ChevronRight24Regular />
        </Button>
      </MenuItem>
    </MenuList>
  )
}