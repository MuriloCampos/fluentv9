import type { NextPage } from 'next'
import * as React from 'react';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

import { MenuProvider } from '../components/MenuProvider';
import { MenuRenderer } from '../components/MenuRenderer';

// There are some weird typing issues with makeStyles ever since I updated to the RC of fluent v9
// I'll go back to using makeStyles once this is solved
export const styles = {
  container: {
    backgroundColor: 'rgba(41, 40, 39, 0.8)',
    width: '275px',
    borderRadius: '2px',
    color: '#F3F2F1'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100vw',
    height: '100vh'
  },
  buttonStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    border: 'none',
    outline: 'none',
    padding: 0
  },
  backButtonStyle: {
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '8px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  itemStyle: {
    padding: '4px 8px'
  },
  itemTooltip: {
    color: '#C8C6C4',
    padding: 0
  }
};

const Home: NextPage = () => {
  return (
    <FluentProvider theme={webDarkTheme}>
      <MenuProvider>
        <div style={styles.center}>
          <MenuRenderer />
        </div>
      </MenuProvider>
    </FluentProvider>
  );
}

export default Home;