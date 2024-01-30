import clsx from 'clsx';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { type Factory, createStatic } from '@/components/factory';

export type LinkProps = RouterLinkProps & {
  label?: string;
  children?: string;
};

export type LinkFactory = Factory.Config<{
  component: 'a';
  props: LinkProps;
}>;

export const Link = createStatic<LinkFactory>((props) => {
  const { label, to = '/', children, ...otherProps } = props;
  const className = clsx('Link', {});
  return (
    <RouterLink {...otherProps} to={to} className={className}>
      <div className="Link--label">{label || children}</div>
    </RouterLink>
  );
});
