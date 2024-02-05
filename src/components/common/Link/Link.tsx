import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createPolymorphicFactory } from '@/components/factory';
import { type LinkProps as RouterLinkProps, Link as RouterLink } from 'react-router-dom';

export interface LinkProps extends RouterLinkProps {
  size?: TBDX.Alignment;
  align?: TBDX.Alignment;
  accent?: TBDX.Alignment;
}

export type LinkFactory = CORE.Factory<{
  ref: HTMLAnchorElement;
  props: LinkProps;
  component: typeof RouterLink;
}>;

export const Link = createPolymorphicFactory<LinkFactory>((props, ref) => {
  const {
    size,
    align,
    accent,
    children,
    className,
    component: Component = RouterLink,
    ...otherProps
  } = props;

  const clxssName = clsx(
    'tbdx-link',
    {
      [`tbdx-link--size-${size}`]: size,
      [`tbdx-link--align-${align}`]: align,
      [`tbdx-link--accent-${accent}`]: accent,
    },
    className
  );

  return (
    <Component {...otherProps} className={clxssName} ref={ref}>
      {children}
    </Component>
  );
});
