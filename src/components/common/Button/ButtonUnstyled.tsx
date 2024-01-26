import * as React from 'react';
import { Factory } from '@/components/factory';

type ButtonUnstyledProps = {
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

type ButtonUnstyledFactory = Factory.Config<{
  component: 'button';
  props: ButtonUnstyledProps;
}>;

export const ButtonUnstyled = Factory.createPolymorphic<ButtonUnstyledFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
