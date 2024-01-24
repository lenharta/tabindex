import clsx from 'clsx';
import { useThemeCTX } from '@/core/theme';
import { type Factory, factory } from '@/components/factory';

import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { PageHero } from './PageHero';

type PageFactory = Factory<{
  component: 'Page';
  components: {
    Content: typeof PageContent;
    Footer: typeof PageFooter;
    Header: typeof PageHeader;
    Hero: typeof PageHero;
  };
}>;

export const Page = factory<PageFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  const classList = clsx('Page', className);
  const theme = useThemeCTX();
  return (
    <div {...otherProps} className={classList} ref={ref}>
      {children}
      <button onClick={() => theme.toggle()}>GO {theme.next.toUpperCase()} MODE</button>
    </div>
  );
});

Page.displayName = '@TBDX/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
