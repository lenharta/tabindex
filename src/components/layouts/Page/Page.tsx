import { type Factory, createPolymorphic } from '@/components/factory';
import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { PageHero } from './PageHero';

export type PageProps = {
  variant?: 'default' | 'sandbox';
};

type PageFactory = Factory.Config<{
  props: PageProps;
  component: 'div';
  components: {
    Hero: typeof PageHero;
    Header: typeof PageHeader;
    Footer: typeof PageFooter;
    Content: typeof PageContent;
  };
}>;

export const Page = createPolymorphic<PageFactory>((props, ref) => {
  const { component: Component = 'div', variant = 'default', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} className={`Page Page--${variant}`}>
      {children}
    </Component>
  );
});

Page.displayName = '@TBDX/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
