import { ThemeStore } from '@/store';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@/app/components';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

export interface RootProps {
  children?: React.ReactNode | undefined;
}

export function Root() {
  return (
    <ThemeStore>
      <Layout>
        <Menu />
        <Header />
        <Outlet />
      </Layout>
    </ThemeStore>
  );
}
