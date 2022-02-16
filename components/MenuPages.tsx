import * as React from 'react';
import {
  Button,
  MenuItemCheckbox,
  MenuList,
  MenuProps,
  MenuDivider,
  MenuItem
} from '@fluentui/react-components';
import { ChevronLeftIcon, ChevronRightIcon } from '@fluentui/react-icons';
import { Switch } from '@fluentui/react-switch';

import { styles } from '../pages/index';
import { useMenuSettings } from './MenuProvider';

const useAutoFocus = (itemRef: React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>) => {
  React.useEffect(() => {
    if (itemRef && itemRef.current) {
      itemRef.current.focus();
    }
  }, [itemRef])
}

export function MainMenu() {
  const firstItemRef = React.useRef<null | HTMLDivElement>(null);
  const { settings, navigateTo } = useMenuSettings();

  useAutoFocus(firstItemRef)

  const capitalize = (word: string) => {
    return word.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <MenuList style={styles.container}>
      <MenuItem ref={firstItemRef} aria-haspopup style={styles.itemStyle} onClick={() => navigateTo('captions')}>
        <div style={styles.buttonStyle}>
          <span>Captions (Alt + C)</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={styles.itemTooltip}>{settings.captionsToggle ? 'Auto CC' : 'Off'}</span>
            <ChevronRightIcon style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>
      <MenuItem aria-haspopup style={styles.itemStyle} onClick={() => navigateTo('quality')}>
        <div style={styles.buttonStyle}>
          <span>Quality</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={styles.itemTooltip}>{capitalize(settings.quality)}</span>
            <ChevronRightIcon style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>
      <MenuItem style={styles.itemStyle}>
        <div style={styles.buttonStyle}>Keyboard shortcuts</div>
      </MenuItem>
    </MenuList>
  );
}

export function QualityMenu() {
  const firstItemRef = React.useRef<null | HTMLButtonElement>(null);
  const { updateSettings, settings, navigateBack } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    quality: [settings.quality]
  });

  useAutoFocus(firstItemRef)

  const onChange: MenuProps['onCheckedValueChange'] = (_, { name, checkedItems }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1];
    if (newCheckedItem) {
      updateSettings({ ...settings, quality: newCheckedItem });
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return (
    <MenuList style={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button
        aria-haspopup
        aria-roledescription='back to home menu'
        style={styles.backButtonStyle}
        onClick={() => navigateBack()}
        ref={firstItemRef}
      >
        <ChevronLeftIcon />
        {`Quality`}
      </Button>
      <MenuDivider />
      <MenuItemCheckbox name='quality' value='auto'>
        Auto
      </MenuItemCheckbox>

      <MenuItemCheckbox name='quality' value='1080p'>
        1080p
      </MenuItemCheckbox>

      <MenuItemCheckbox name='quality' value='720p'>
        720p
      </MenuItemCheckbox>

      <MenuItemCheckbox name='quality' value='480p'>
        480p
      </MenuItemCheckbox>

      <MenuItemCheckbox name='quality' value='240p'>
        240p
      </MenuItemCheckbox>
    </MenuList>
  );
}

export function CaptionsColor() {
  const firstItemRef = React.useRef<null | HTMLButtonElement>(null);
  const { settings, updateSettings, navigateBack } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captionsColor: [settings.captionsColor]
  });

  useAutoFocus(firstItemRef)

  const onChange: MenuProps['onCheckedValueChange'] = (_, { name, checkedItems }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1];
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsColor: newCheckedItem });
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return (
    <MenuList style={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button
        aria-haspopup
        aria-roledescription='back to captions settings menu'
        style={styles.backButtonStyle}
        onClick={() => navigateBack()}
        ref={firstItemRef}
      >
        <ChevronLeftIcon />
        {`Color`}
      </Button>
      <MenuDivider />

      <MenuItemCheckbox name='captionsColor' value='standard'>
        Standard
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captionsColor' value='standard-reverse'>
        Standard reverse
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captionsColor' value='purple'>
        Purple
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captionsColor' value='purple-reverse'>
        Purple reverse
      </MenuItemCheckbox>
    </MenuList>
  );
}

export function CaptionsSettings() {
  const firstItemRef = React.useRef<null | HTMLButtonElement>(null);
  const { settings, navigateTo, navigateBack, revertToDefault } = useMenuSettings();
  // const [switchValue, setSwitchValue] = React.useState(settings.captionsBackgroundTransparency);

  useAutoFocus(firstItemRef)

  return (
    <MenuList style={styles.container}>
      <Button
        aria-haspopup
        aria-roledescription='back to captions menu'
        style={styles.backButtonStyle}
        onClick={() => navigateBack()}
        ref={firstItemRef}
      >
        <ChevronLeftIcon />
        {`Settings`}
      </Button>
      <MenuDivider />

      <MenuItem aria-haspopup style={styles.itemStyle} onClick={() => navigateTo('captionsSize')}>
        <div style={styles.buttonStyle}>
          <span>Size</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={styles.itemTooltip}>
              {settings.captionsSize.replace(/^\w/, (c) => c.toUpperCase())}
            </span>
            <ChevronRightIcon style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>

      <MenuItem aria-haspopup style={styles.itemStyle} onClick={() => navigateTo('captionsColor')}>
        <div style={styles.buttonStyle}>
          <span>Color</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={styles.itemTooltip}>
              {settings.captionsColor.replace(/^\w/, (c) => c.toUpperCase())}
            </span>
            <ChevronRightIcon style={{ marginLeft: 12 }} />
          </div>
        </div>
      </MenuItem>

      {/* <MenuItem style={styles.itemStyle}>
        <div style={styles.buttonStyle}>
          <span>Background transparency</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ ...styles.itemTooltip, marginRight: 8 }}>
              {settings.captionsBackgroundTransparency ? 'On' : 'Off'}
            </span>
            <Switch
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSwitchValue((current) => !current);
                  updateSettings({
                    ...settings,
                    captionsBackgroundTransparency: !settings.captionsBackgroundTransparency
                  });
                }
              }}
              checked={switchValue}
              onChange={(_, data) => {
                setSwitchValue(data.checked);
                updateSettings({ ...settings, captionsBackgroundTransparency: data.checked });
              }}
            />
          </div>
        </div>
      </MenuItem> */}

      <MenuItem onClick={() => revertToDefault()}>Revert to default settings</MenuItem>
    </MenuList>
  );
}

export function CaptionsSize() {
  const firstItemRef = React.useRef<null | HTMLButtonElement>(null);
  const { settings, updateSettings, navigateBack } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captionsSize: [settings.captionsSize]
  });

  useAutoFocus(firstItemRef)

  const onChange: MenuProps['onCheckedValueChange'] = (e, { name, checkedItems }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1];
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsSize: newCheckedItem });
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return (
    <MenuList style={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button
        aria-haspopup
        aria-roledescription='back to captions settings menu'
        style={styles.backButtonStyle}
        onClick={() => navigateBack()}
        ref={firstItemRef}
      >
        <ChevronLeftIcon />
        Size
      </Button>
      <MenuDivider />

      <MenuItemCheckbox name='captionsSize' value='small'>
        Small
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captionsSize' value='medium'>
        Medium
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captionsSize' value='large'>
        Large
      </MenuItemCheckbox>
    </MenuList>
  );
}

export function CaptionsToggle() {
  const firstItemRef = React.useRef<null | HTMLButtonElement>(null);
  const { settings, updateSettings, navigateTo, navigateBack } = useMenuSettings();
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    captions: [settings.captionsToggle ? 'Auto CC' : 'off']
  });

  useAutoFocus(firstItemRef)

  const onChange: MenuProps['onCheckedValueChange'] = (_, { name, checkedItems }) => {
    const newCheckedItem = checkedItems[checkedItems.length - 1];
    if (newCheckedItem) {
      updateSettings({ ...settings, captionsToggle: newCheckedItem === 'off' ? false : true });
      setCheckedValues(() => ({ [name]: [newCheckedItem] }));
    }
  };

  return (
    <MenuList style={styles.container} checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <Button
        aria-haspopup
        aria-roledescription='back to home menu'
        style={styles.backButtonStyle}
        onClick={() => navigateBack()}
        ref={firstItemRef}
      >
        <ChevronLeftIcon />
        {`Captions (Alt + C)`}
      </Button>
      <MenuDivider />
      <MenuItemCheckbox name='captions' value='off'>
        Off
      </MenuItemCheckbox>

      <MenuItemCheckbox name='captions' value='Auto CC'>
        Auto CC
      </MenuItemCheckbox>
      <MenuDivider />
      <MenuItem aria-haspopup onClick={() => navigateTo('captionsSettings')}>
        <div style={styles.buttonStyle}>
          <span>Settings</span>
          <ChevronRightIcon />
        </div>
      </MenuItem>
    </MenuList>
  );
}
