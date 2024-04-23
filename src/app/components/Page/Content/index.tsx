import clsx from 'clsx';
import React from 'react';

export interface PageContentProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const PageContent: React.FC<PageContentProps> = (props) => {
  const { children, className } = props;
  return (
    <main id="mainContent" className={clsx('page-content', className)}>
      <React.Fragment>{children}</React.Fragment>
    </main>
  );
};

PageContent.displayName = 'components/Page.Content';
