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
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captions: [settings.captionsToggle ? 'Auto CC' : 'off']
  });

  const onChange: MenuProps['onCheckedValueChange'] = (e, {
    name,
    checkedItems
  }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1]
    updateSettings({ ...settings, captionsToggle: newCheckedItem === 'off' ? false : true })
    setCheckedValues(() => ({ [name]: [newCheckedItem] }));
  };

  return (
    <MenuList className={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button aria-roledescription='back to home menu' className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'menu' })}>
        <ChevronLeft24Regular />
        {`Quality`}
      </Button>
      <Divider aria-disabled />
      <MenuItemCheckbox name="captions" value="off">
        Off
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captions" value="Auto CC">
        Auto CC
      </MenuItemCheckbox>
      <Divider aria-disabled />
      <MenuItem>
        <Button className={styles.buttonStyle}>
          <span>Settings</span>
          <ChevronRight24Regular />
        </Button>
      </MenuItem>
    </MenuList>
  )
}