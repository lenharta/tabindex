import * as React from 'react';
import * as Router from 'react-router-dom';
import { AppProvider, ThemeProvider } from '@/store';
import { Side } from './common';

export default function Layout(): JSX.Element {
  return (
    <React.Fragment>
      <ThemeProvider>
        <AppProvider>
          <Side />
          <Router.Outlet />
        </AppProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
