import clsx from 'clsx';
import React from 'react';
import { PageHero } from './Hero';
import { PageFooter } from './Footer';
import { PageContent } from './Content';
import { PageSection } from './Section';
import { Controls } from '../Controls';

export interface PageProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type PageComponent = React.FC<PageProps> & {
  Hero: typeof PageHero;
  Footer: typeof PageFooter;
  Content: typeof PageContent;
  Section: typeof PageSection;

  // TEMPORARY
  Controls: typeof Controls;
};

export const Page: PageComponent = (props) => {
  const { children, className } = props;
  return (
    <div className={clsx('Page', className)}>
      {children}
      <Page.Footer />
      <Page.Controls />
    </div>
  );
};

Page.Hero = PageHero;
Page.Footer = PageFooter;
Page.Section = PageSection;
Page.Content = PageContent;

// TEMPORARY
Page.Controls = Controls;

Page.displayName = 'app/Page';
Page.Hero.displayName = 'app/Page.Hero';
Page.Footer.displayName = 'app/Page.Footer';
Page.Content.displayName = 'app/Page.Content';
