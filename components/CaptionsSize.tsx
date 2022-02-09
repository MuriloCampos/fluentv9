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

export function CaptionsSize() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captionsSize: [settings.captionsSize]
  });
  console.log(checkedValues)

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
      <Button aria-roledescription='back to captions settings menu' className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captionsSettings' })}>
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