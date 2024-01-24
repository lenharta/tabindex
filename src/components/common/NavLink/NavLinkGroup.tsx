import { type Factory, factory } from '@/components/factory';

export type NavLinkGroupProps = {};

export type NavLinkGroupFactory = Factory<{
  props: NavLinkGroupProps;
  component: 'NavLinkGroup';
  components: {};
}>;

export const NavLinkGroup = factory<NavLinkGroupFactory>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
