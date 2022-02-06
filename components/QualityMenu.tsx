import * as React from 'react';
import {
  Button,
  Divider,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
} from '@fluentui/react-components';
import { ChevronLeft24Regular } from '@fluentui/react-icons';

import { useMenuListContainerStyles } from '../pages/index'
import { useMenuSettings } from '../components/MenuProvider'

export function QualityMenu() {
  const styles = useMenuListContainerStyles();
  const { updateSettings, settings } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    quality: [settings.quality]
  });

  const onChange: MenuProps['onCheckedValueChange'] = (e, {
    name,
    checkedItems
  }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1]
    updateSettings({ ...settings, quality: newCheckedItem })
    setCheckedValues(() => ({ [name]: [newCheckedItem] }));
  };

  return (
    <MenuList className={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button className={styles.backButtonStyle} onClick={() => updateSettings({ ...settings, currentMenu: 'menu' })}>
        <ChevronLeft24Regular />
        {`Quality`}
      </Button>
      <Divider />
      <MenuItemCheckbox name="quality" value="auto">
        Auto
      </MenuItemCheckbox>

      <MenuItemCheckbox name="quality" value="1080p">
        1080p
      </MenuItemCheckbox>

      <MenuItemCheckbox name="quality" value="720p">
        720p
      </MenuItemCheckbox>

      <MenuItemCheckbox name="quality" value="480p">
        480p
      </MenuItemCheckbox>

      <MenuItemCheckbox name="quality" value="240p">
        240p
      </MenuItemCheckbox>
    </MenuList>
  )
}