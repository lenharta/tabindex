import clsx from 'clsx';
import * as React from 'react';
import { type Factory, createPolymorphic } from '@/components/factory';

export type TitleProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lead?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  variant?: 'filled' | 'outlined' | 'gradient';
  alignment?: 'start' | 'center' | 'end';
  className?: string;
};

export type TitleFactory = Factory.Config<{
  props: TitleProps;
  component: 'h3';
}>;

function findComponent<T>(component: T, props: Partial<TitleProps>) {
  const { h1, h2, h3, h4, h5, h6 } = props;
  if (h1 !== undefined) return 'h1';
  if (h2 !== undefined) return 'h2';
  if (h3 !== undefined) return 'h3';
  if (h4 !== undefined) return 'h4';
  if (h5 !== undefined) return 'h5';
  if (h6 !== undefined) return 'h6';
  return component;
}

export const Title = createPolymorphic<TitleFactory>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    size,
    lead,
    scheme,
    variant,
    alignment,
    component = 'h3',
    className: defaultClassName,
    children,
    ...otherProps
  } = props;

  const Component = React.useMemo(
    () => findComponent(component, { h1, h2, h3, h4, h5, h6 }),
    [component, h1, h2, h3, h4, h5, h6]
  );

  const className = clsx(
    `Title Title--${Component}`,
    {
      [`Title--${alignment}`]: alignment !== undefined,
      [`Title--lead-${lead}`]: lead !== undefined,
      [`Title--${variant}`]: variant !== undefined,
      [`Title--${scheme}`]: scheme !== undefined,
      [`Title--${size}`]: size !== undefined,
    },
    defaultClassName
  );

  return (
    <Component {...otherProps} className={className} ref={ref}>
      {children}
    </Component>
  );
});
