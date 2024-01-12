import { createFactory } from '@/utils';
import { type TFactoryPage } from './types';

export const Page = createFactory<TFactoryPage>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="Page">
      {children}
    </div>
  );
});

const PageHero: TFactoryPage['components']['Hero'] = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div className="Page-hero" {...otherProps}>
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
