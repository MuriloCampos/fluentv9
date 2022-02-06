import type { NextPage } from 'next'
import * as React from 'react';
import {
  Button,
  Menu,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  FluentProvider,
  teamsDarkTheme,
} from '@fluentui/react-components';
import { MainMenu } from '../components/MainMenu'
import { QualityMenu } from '../components/QualityMenu'
import { MenuProvider, useMenuSettings } from '../components/MenuProvider'
import { MenuRenderer } from '../components/MenuRenderer'
import Head from 'next/head'

export const useMenuListContainerStyles = makeStyles({
  container: theme => ({
    backgroundColor: 'rgba(41, 40, 39, 0.8)',
    width: '275px',
    boxShadow: `${theme.shadow16}`,
    borderRadius: '2px',
    color: '#F3F2F1'
  }),
  center: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }),
  buttonStyle: () => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    border: 'none',
    outline: 'none',
    padding: 0
  }),
  backButtonStyle: () => ({
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '8px',
    display: 'flex',
    justifyContent: 'flex-start ' 
  }),
  itemStyle: () => ({
    padding: '8px',
  }),
  itemTooltip: () => ({
    color: '#C8C6C4',
    padding: 0,
  })
});

export type MenuStates = 
  | 'menu'
  | 'captions'
  | 'captionsSettings'
  | 'captionsSize'
  | 'captionsColor'
  | 'quality'

const Home: NextPage = () => {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <MenuProvider>
        <MenuRenderer />
      </MenuProvider>
    </FluentProvider>
  )
}

export default Home
