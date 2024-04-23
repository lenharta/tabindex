import { ThemeStore } from '@/store';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Side } from '@/app/components';

export interface RootProps {
  children?: React.ReactNode | undefined;
}

export function Root() {
  return (
    <ThemeStore>
      <Header />
      <Side />
      <Outlet />
    </ThemeStore>
  );
}
