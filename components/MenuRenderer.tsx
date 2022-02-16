import * as React from 'react';
import { Button, Menu, MenuPopover, MenuTrigger, MenuProps } from '@fluentui/react-components';

import { useMenuSettings, MenuStates } from './MenuProvider';
import {
  CaptionsColor,
  CaptionsSize,
  CaptionsSettings,
  CaptionsToggle,
  QualityMenu,
  MainMenu
} from './MenuPages';

export function MenuRenderer() {
  const { settings, updateSettings, navigateBack } = useMenuSettings();
  const { menuNavigation } = settings;
  const currentMenu = menuNavigation[menuNavigation.length - 1];
  const [open, setOpen] = React.useState(false);

  const onOpenChange: MenuProps['onOpenChange'] = (e: any, data) => {
    // If the user is in a submenu, handle ESC key navigation to go back to
    // the parent menu instead of closing the menu popover
    if (e.type === 'keydown' && e.nativeEvent && e.nativeEvent.key === 'Escape' && currentMenu !== 'menu') {
      navigateBack();
    } else {
      setOpen(data.open);

      // The user might be closing the popover by clicking outside, so we need to reset the navigation stack here
      if (!data.open) {
        updateSettings({ ...settings, menuNavigation: ['menu'] });
      }
    }
  };

  const renderMenu = (currentMenu: MenuStates) => {
    switch (currentMenu) {
      case 'menu':
        return <MainMenu />;
      case 'quality':
        return <QualityMenu />;
      case 'captions':
        return <CaptionsToggle />;
      case 'captionsSettings':
        return <CaptionsSettings />;
      case 'captionsSize':
        return <CaptionsSize />;
      case 'captionsColor':
        return <CaptionsColor />;
    }
  };

  return (
    <Menu persistOnItemClick open={open} onOpenChange={onOpenChange}>
      <MenuTrigger>
        <Button>Playback settings</Button>
      </MenuTrigger>

      <MenuPopover>{renderMenu(currentMenu)}</MenuPopover>
    </Menu>
  );
}
