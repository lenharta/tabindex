import { type LinkProps, Link } from 'react-router-dom';
import { type Factory, createFactory } from '@/core/factory';

export interface RouterLinkProps extends LinkProps {}

export type RouterLinkFactory = Factory<{
  props: RouterLinkProps;
  component: 'a';
  components: {};
}>;

export const RouterLink = createFactory<RouterLinkFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <Link {...otherProps} ref={ref}>
      {children}
    </Link>
  );
});

RouterLink.displayName = '@tabindex/Unstyled/RouterLink';
