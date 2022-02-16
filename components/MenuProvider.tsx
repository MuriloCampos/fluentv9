import * as React from 'react';

export type MenuStates =
  | 'menu'
  | 'captions'
  | 'captionsSettings'
  | 'captionsSize'
  | 'captionsColor'
  | 'quality';

type MenuSettings = {
  captionsToggle: boolean;
  captionsSize: string;
  captionsColor: string;
  captionsBackgroundTransparency: boolean;
  quality: string;
  menuNavigation: MenuStates[];
};

type MenuContextData = {
  settings: MenuSettings;
  updateSettings(newSettings: MenuSettings): void;
  navigateTo(newMenu: MenuStates): void;
  navigateBack(): void;
  revertToDefault(): void;
};

interface MenuProviderProps {
  initialSettings?: MenuSettings;
}

const defaultSettings: MenuSettings = {
  captionsToggle: false,
  captionsSize: 'small',
  captionsColor: 'standard',
  captionsBackgroundTransparency: true,
  quality: '720p',
  menuNavigation: ['menu']
};

const MenuContext = React.createContext({} as MenuContextData);

export const MenuProvider: React.FC<MenuProviderProps> = ({
  children,
  initialSettings = defaultSettings
}) => {
  const [settings, setSettings] = React.useState(initialSettings);

  function updateSettings(newSettings: MenuSettings) {
    setSettings((current) => {
      const currentSettings = current;
      return { ...currentSettings, ...newSettings };
    });
  }

  function navigateTo(newMenu: MenuStates) {
    setSettings((current) => {
      const currentNavigation = [...current.menuNavigation];
      currentNavigation.push(newMenu);
      return { ...current, menuNavigation: [...currentNavigation] };
    });
  }

  function navigateBack() {
    setSettings((current) => {
      const currentNavigation = [...current.menuNavigation];
      currentNavigation.pop();
      return { ...current, menuNavigation: [...currentNavigation] };
    });
  }

  function revertToDefault() {
    setSettings(current => {
      const currentNavigation = [...current.menuNavigation];
      return { ...initialSettings, menuNavigation: [...currentNavigation] };
    })
  }

  return (
    <MenuContext.Provider
      value={{
        settings,
        updateSettings,
        navigateTo,
        navigateBack,
        revertToDefault,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export function useMenuSettings() {
  const context = React.useContext(MenuContext);

  if (!context) {
    throw new Error('useMenuSettings must be used within the MenuProvider');
  }

  return context;
}
