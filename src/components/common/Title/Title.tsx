import clsx from 'clsx';
import * as React from 'react';

export type TitleBaseProps = React.ComponentPropsWithoutRef<'h3'>;

export type TitleProps = TitleBaseProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wieght?: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
  scheme?: 'default' | 'secondary' | 'action';
  alignment?: 'start' | 'center' | 'end';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title = (props: TitleProps) => {
  const {
    size = 'small',
    scheme = 'default',
    alignment = 'start',
    component,
    className,
    children,
    ...otherProps
  } = props;

  const Component = component || 'h3';

  const css = clsx('Title', {
    [`Title--${size}`]: size,
    [`Title--${scheme}`]: scheme,
    [`Title--${alignment}`]: alignment,
    [`Title--${component}`]: component,
  });

  return (
    <Component {...otherProps} className={css}>
      {children}
    </Component>
  );
};
