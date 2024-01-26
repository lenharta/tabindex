import { Factory, factory } from '@/components/factory';

type PageContentProps = {};

type PageContentFactory = Factory<{
  props: PageContentProps;
  component: 'main';
}>;

export const PageContent = factory<PageContentFactory>((props, ref) => {
  const { component: Component = 'main', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="PageContent" ref={ref} id="main_content">
      {children}
    </Component>
  );
});

PageContent.displayName = '@TBDX/Page.Content';
