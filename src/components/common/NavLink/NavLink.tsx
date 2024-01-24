import { type Factory, factory } from '@/components/factory';

export type NavLinkProps = {};

export type NavLinkFactory = Factory<{
  props: NavLinkProps;
  component: 'NavLink';
  components: {};
}>;

export const NavLink = factory<NavLinkFactory>((props, ref) => {
  const { component: Component = 'a', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
