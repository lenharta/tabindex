import { type Factory, createStatic } from '@/components/factory';
import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { PageHero } from './PageHero';

export type PageProps = {
  variant?: 'default' | 'sandbox';
  title?: string;
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

export const Page = createStatic<PageFactory>((props) => {
  const { variant = 'default', title, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={`Page Page--${variant}`}>
      <Page.Header>{}</Page.Header>
      {children}
      <Page.Footer>{}</Page.Footer>
    </div>
  );
});

Page.displayName = '@TBDX/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
