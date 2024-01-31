import { type Factory, createStatic } from '@/components/factory';

import { PageHero } from './PageHero';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';

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
  const clxssname = `tbdx-page tbdx-page--${variant}`;

  return (
    <div className={clxssname}>
      {/* <PageHeader /> */}
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
