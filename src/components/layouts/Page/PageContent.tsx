import { Factory, factory } from '@/components/factory';

type PageContentFactory = Factory<{
  component: 'PageContent';
}>;

export const PageContent = factory<PageContentFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <main {...otherProps} className="PageContent" ref={ref}>
      {children}
    </main>
  );
});

PageContent.displayName = '@TBDX/Page.Content';
