import clsx from 'clsx';
import * as React from 'react';
import { type Factory, createPolymorphic } from '@/components/factory';

type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lead?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  variant?: 'filled' | 'outlined' | 'gradient';
  alignment?: 'start' | 'center' | 'end';
  className?: string;
  children?: React.ReactNode;
  strong?: boolean;
  span?: boolean;
};

export type TextFactory = Factory.Config<{
  component: 'p';
  props: TextProps;
}>;

function findComponent<T>(component: T, props: Partial<TextProps>) {
  const { span, strong } = props;
  if (strong !== undefined) return 'strong';
  if (span !== undefined) return 'span';
  return component;
}

export const Text = createPolymorphic<TextFactory>((props, ref) => {
  const {
    size,
    span,
    strong,
    lead = 'xs',
    scheme = 'primary',
    variant = 'filled',
    alignment = 'start',
    component = 'p',
    className: defaultClassName,
    children,
    ...otherProps
  } = props;

  const Component = React.useMemo(
    () => findComponent(component, { span, strong }),
    [component, span, strong]
  );

  const className = clsx(
    `Text Text--${Component}`,
    {
      [`Text--${alignment}`]: alignment !== undefined,
      [`Text--lead-${lead}`]: lead !== undefined,
      [`Text--${variant}`]: variant !== undefined,
      [`Text--${scheme}`]: scheme !== undefined,
      [`Text--${size}`]: size !== undefined,
    },
    defaultClassName
  );

  return (
    <Component {...otherProps} className={className} ref={ref}>
      {children}
    </Component>
  );
});
