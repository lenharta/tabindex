import React from 'react';

export interface LayoutProps {
  children?: React.ReactNode | undefined;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

Layout.displayName = 'app/Layout';
