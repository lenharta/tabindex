import React from 'react';

import { PageContent } from './Content';
import { PageFooter } from './Footer';
import { PageHero } from './Hero';
import clsx from 'clsx';

export interface PageProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type PageComponent = React.FC<PageProps> & {
  Content: typeof PageContent;
  Footer: typeof PageFooter;
  Hero: typeof PageHero;
};

export const Page: PageComponent = (props) => {
  const { children, className } = props;
  return (
    <div className={clsx('Page', className)}>
      {children}
      <Page.Footer />
    </div>
  );
};

Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Hero = PageHero;

Page.displayName = 'components/Page';
Page.Content.displayName = 'component/Page.Content';
Page.Footer.displayName = 'component/Page.Footer';
Page.Hero.displayName = 'component/Page.Hero';
