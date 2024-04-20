import { ThemeStore } from '@/store';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@/app/components';

export interface RootProps {
  children?: React.ReactNode | undefined;
}

export function Root() {
  return (
    <ThemeStore>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeStore>
  );
}
