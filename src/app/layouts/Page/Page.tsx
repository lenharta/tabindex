import type { TComponentPage, TSubComponentsPage } from './types';
import { PageContent } from './Content';
import { PageHero } from './Hero';

export const Page: TComponentPage & TSubComponentsPage = (props) => {
  const { children, className, ...otherProps } = props;
  const baseProps = { className: 'Page' };
  return (
    <section {...otherProps} {...baseProps} data-theme-mode="dark">
      {children ?? null}
    </section>
  );
};

Page.Hero = PageHero;
Page.Content = PageContent;
