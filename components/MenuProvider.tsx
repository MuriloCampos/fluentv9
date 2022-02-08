import * as React from 'react';

export type MenuStates = 'menu' | 'captions' | 'captionsSettings' | 'captionsSize' | 'captionsColor' | 'quality'

export type CaptionsMenuStates = 'menu' | 'captions-toggle' | 'captions-settings'

type MenuSettings = {
  captionsToggle: boolean;
  captionsSize: 'small' | 'medium' | 'large';
  captionsColor: 'standard' | 'standard-reverse' | 'purple' | 'purple-reverse';
  captionsBackgroundTransparency: boolean;
  quality: string,
  currentMenu: MenuStates,
  currentCaptionsMenu: CaptionsMenuStates,
}

type MenuContextData = {
  settings: MenuSettings,
  updateSettings(newSettings: MenuSettings): void;
}

const initalContextValue: MenuSettings = {
  captionsToggle: false,
  captionsSize: 'small',
  captionsColor: 'standard',
  captionsBackgroundTransparency: true,
  quality: '720p',
  currentMenu: 'menu',
  currentCaptionsMenu: 'menu',
}

const MenuContext = React.createContext({} as MenuContextData)

export const MenuProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = React.useState(initalContextValue)

  function updateSettings(newSettings: MenuSettings) {
    setSettings(current => {
      const currentSettings = current;
      return {...currentSettings, ...newSettings}
    })
  }

  return <MenuContext.Provider value={{
    settings,
    updateSettings
  }}>{children}</MenuContext.Provider>
}

export function useMenuSettings() {
  const context = React.useContext(MenuContext)

  if (!context) {
    throw new Error('useMenuSettings must be used within the MenuProvider')
  }

  return context
}