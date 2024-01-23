import clsx from 'clsx';
import * as React from 'react';

export type TextBaseProps = React.ComponentPropsWithoutRef<'p'>;

export type TextProps = TextBaseProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
  scheme?: 'default' | 'secondary' | 'action';
  alignment?: 'start' | 'center' | 'end';
  component?: 'span' | 'p';
};

export const Text = (props: TextProps) => {
  const {
    size = 'small',
    weight = 'reg',
    scheme = 'default',
    alignment = 'start',
    component: Component = 'p',
    className,
    children,
    ...otherProps
  } = props;

  const css = clsx('Text', {
    [`Text--${size}`]: size,
    [`Text--${weight}`]: weight,
    [`Text--${scheme}`]: scheme,
    [`Text--${alignment}`]: alignment,
  });

  return (
    <Component {...otherProps} className={css}>
      {children}
    </Component>
  );
};
