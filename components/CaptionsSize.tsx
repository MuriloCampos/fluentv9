import * as React from 'react';
import {
  Button,
  MenuDivider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
} from '@fluentui/react-components';
import { ChevronLeft24Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function CaptionsSize() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captionsSize: [settings.captionsSize]
  });

  const onChange: MenuProps['onCheckedValueChange'] = (e, {
    name,
    checkedItems
  }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1]
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsSize: newCheckedItem })
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return(
    <MenuList className={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button aria-roledescription='back to captions settings menu' className={styles.backButtonStyle} onClick={() => {
        const currentNavigation = [...settings.menuNavigation]
        currentNavigation.pop()
        updateSettings({ ...settings, menuNavigation: [...currentNavigation] })
      }}>
        <ChevronLeft24Regular />
        {`Size`}
      </Button>
      <MenuDivider />

      <MenuItemCheckbox name="captionsSize" value="small">
        Small
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captionsSize" value="medium">
        Medium
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captionsSize" value="large">
        Large
      </MenuItemCheckbox>
    </MenuList>
  )
}