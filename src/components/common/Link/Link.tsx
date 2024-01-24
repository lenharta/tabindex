import { type Factory, factory } from '@/components/factory';

export type LinkProps = {};

export type LinkFactory = Factory<{
  props: LinkProps;
  component: 'Link';
  components: {};
}>;

export const Link = factory<LinkFactory>((props, ref) => {
  const { component: Component = 'a', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
