import * as React from 'react';
import PageContent from './PageContent';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import PageHero from './PageHero';

interface IPage extends React.ComponentPropsWithoutRef<'div'> {}

interface IPageStaticComponents {
  Content: typeof PageContent;
  Footer: typeof PageFooter;
  Header: typeof PageHeader;
  Hero: typeof PageHero;
}

export const Page: React.FC<IPage> & IPageStaticComponents = (props) => {
  const { children, ...otherProps } = props;
  return <div {...otherProps}>{children}</div>;
};

Page.displayName = '@tabindex/Page';

Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
