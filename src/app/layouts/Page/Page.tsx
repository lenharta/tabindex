import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { PageContextProvider } from '@/app/layouts/Page/Page.context';
import { type TFactoryPage } from '@/app/layouts';
import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';
import { PageHero } from './PageHero';

const defaultModifiers: Partial<TFactoryPage['props']> = {
  variant: 'default',
};

export const Page = createFactory<TFactoryPage>((props, ref) => {
  const { children, id, variant = 'default', ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { variant });
  const css = createThemeClasses({ base: 'Page', modifiers });

  return (
    <div ref={ref} {...otherProps} className={css}>
      <PageContextProvider value={{ id, variant }}>{children}</PageContextProvider>
    </div>
  );
});

Page.Hero = PageHero;
Page.Footer = PageFooter;
Page.Content = PageContent;
