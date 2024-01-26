import { type Factory, factory } from '@/components/factory';

type PageFooterProps = {};

type PageFooterFactory = Factory<{
  props: PageFooterProps;
  component: 'footer';
}>;

export const PageFooter = factory<PageFooterFactory>((props, ref) => {
  const { component: Component = 'main', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="PageFooter" ref={ref}>
      {children}
    </Component>
  );
});

PageFooter.displayName = '@TBDX/Page.Footer';
