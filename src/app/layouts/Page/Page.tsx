import { createFactory } from '@/utils';
import { type TFactoryPage } from './types';
import { Title } from '@/common/Title';

export const Page = createFactory<TFactoryPage>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="Page">
      {children}
    </div>
  );
});

const PageHero: TFactoryPage['components']['Hero'] = (props) => {
  const { title, children, ...otherProps } = props;
  return (
    <div className="Page-hero" {...otherProps}>
      {title && <Title as="h1" size="lg" children={title} />}
      {children}
    </div>
  );
};

const PageContent: TFactoryPage['components']['Content'] = (props) => {
  const { children, ...otherProps } = props;
  return (
    <main {...otherProps} className="Page-content" id="mainContent">
      {children}
    </main>
  );
};

Page.Hero = PageHero;
Page.Content = PageContent;
