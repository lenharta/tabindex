import clsx from 'clsx';
import { type CORE, createBasicFactory } from '@/components/factory';

import { PageHero } from './PageHero';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { PageContent } from './PageContent';

interface PageProps {
  variant?: 'default';
}

type PageFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: PageProps;
  component: 'div';
  components: {
    Hero: typeof PageHero;
    Header: typeof PageHeader;
    Content: typeof PageContent;
  };
}>;

export const Page = createBasicFactory<PageFactory>((props) => {
  const { component: Component = 'div', variant = 'default', children, ...otherProps } = props;

  const clxssName = clsx('tbdx-page', {
    [`tbdx-page--${variant}`]: variant,
  });

  return (
    <Component {...otherProps} className={clxssName}>
      {children}
      <PageFooter />
    </Component>
  );
});

Page.displayName = '@TBDX/Page';

Page.Hero = PageHero;
Page.Header = PageHeader;
Page.Content = PageContent;
