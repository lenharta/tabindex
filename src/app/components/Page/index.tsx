import clsx from 'clsx';
import { useThemeStore } from '@/core/theme';
import { type StaticFactory, createStaticFactory } from '@/core/factory';

import PageContent from './PageContent';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import PageHero from './PageHero';

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
  const theme = useThemeStore();
  console.log(theme.mode);
  return (
    <div {...otherProps} className={classList}>
      {children}
      <button onClick={() => theme.toggle()}>GO {theme.next.toUpperCase()} MODE</button>
    </div>
  );
});

Page.displayName = '@tabindex/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
