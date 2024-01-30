import React from 'react';
import { PageHero } from './PageHero';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { PageContent } from './PageContent';
import { type Factory, createStatic } from '@/components/factory';

export type PageProps = {
  variant?: 'default' | 'sandbox';
};

export type PageFactory = Factory.Config<{
  component: 'div';
  props: PageProps;
  components: {
    Hero: typeof PageHero;
    Header: typeof PageHeader;
    Footer: typeof PageFooter;
    Content: typeof PageContent;
  };
}>;

export const Page = createStatic<PageFactory>((props) => {
  const { children, variant = 'default' } = props;
  const clxssname = `Page Page--${variant}`;

  return (
    <div className={clxssname}>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  );
});

Page.displayName = '@TBDX/Page';

Page.Hero = PageHero;
Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Content = PageContent;
