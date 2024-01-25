import { type Factory, factory } from '@/components/factory';

type PageHeaderProps = {};

type PageHeaderFactory = Factory<{
  props: PageHeaderProps;
  component: 'header';
}>;

export const PageHeader = factory<PageHeaderFactory>((props, ref) => {
  const { component: Component = 'header', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="PageHeader" ref={ref}>
      {children}
    </Component>
  );
});

PageHeader.displayName = '@TBDX/Page.Header';
