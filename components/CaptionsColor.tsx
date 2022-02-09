import * as React from 'react';
import {
  Button,
  MenuDivider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
  MenuItem,
} from '@fluentui/react-components';
import { ChevronLeft24Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function CaptionsColor() {
  const styles = useMenuListContainerStyles();
  const { settings, updateSettings } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captionsColor: [settings.captionsColor]
  });

  const onChange: MenuProps['onCheckedValueChange'] = (e, {
    name,
    checkedItems
  }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1]
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsColor: newCheckedItem })
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return(
    <MenuList className={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button aria-roledescription='back to captions settings menu' className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'captionsSettings' })}>
        <ChevronLeft24Regular />
        {`Color`}
      </Button>
      <MenuDivider />

      <MenuItemCheckbox name="captionsColor" value="standard">
        Standard
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captionsColor" value="standard-reverse">
        Standard reverse
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captionsColor" value="purple">
        Purple
      </MenuItemCheckbox>

      <MenuItemCheckbox name="captionsColor" value="purple-reverse">
        Purple reverse
      </MenuItemCheckbox>
    </MenuList>
  )
}