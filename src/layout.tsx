import * as React from 'react';
import * as Router from 'react-router-dom';
import { Side } from '@/components';
import { AppProvider, ThemeProvider } from '@/store';
import { loader as loadShiki, ShikiProvider } from '@/shiki';

export default function Layout(): JSX.Element {
  return (
    <React.Fragment>
      <ThemeProvider>
        <ShikiProvider loader={loadShiki}>
          <AppProvider>
            <Side />
            <Router.Outlet />
          </AppProvider>
        </ShikiProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
