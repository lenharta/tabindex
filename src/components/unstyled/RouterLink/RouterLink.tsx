import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { createFactory } from '@/core/factory';
import type { Factory } from '@/core/factory';

export interface RouterLinkProps extends LinkProps {}

export type RouterLinkFactory = Factory<{
  props: RouterLinkProps;
  component: 'a';
}>;

export const RouterLink = createFactory<RouterLinkFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <Link {...otherProps} ref={ref}>
      {children}
    </Link>
  );
});
