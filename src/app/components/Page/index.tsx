import { StaticFactory, createStaticFactory } from '@/core/factory';

import PageContent from './PageContent';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import PageHero from './PageHero';
import clsx from 'clsx';

interface IPageProps {}

type PageFactory = StaticFactory<{
  props: IPageProps;
  component: 'div';
  components: {
    Content: typeof PageContent;
    Footer: typeof PageFooter;
    Header: typeof PageHeader;
    Hero: typeof PageHero;
  };
}>;

export const Page = createStaticFactory<PageFactory>((props) => {
  const { children, className, ...otherProps } = props;
  const classList = clsx('Page', className);
  return (
    <div {...otherProps} className={classList}>
      {children}
    </div>
  );
});

Page.displayName = '@tabindex/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
