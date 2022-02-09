import type { NextPage } from 'next'
import * as React from 'react';
import {
  makeStyles,
  FluentProvider,
  webDarkTheme,
} from '@fluentui/react-components';
import { MenuProvider } from '../components/MenuProvider'
import { MenuRenderer } from '../components/MenuRenderer'

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
    justifyContent: 'space-evenly',
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

const Home: NextPage = () => {
  const styles = useMenuListContainerStyles();

  return (
    <FluentProvider theme={webDarkTheme}>
      <MenuProvider>
        <main className={styles.center}>
          <MenuRenderer />
          {/* <CaptionsMenuRenderer /> */}
        </main>
      </MenuProvider>
    </FluentProvider>
  )
}

export default Home
