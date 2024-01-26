import * as React from 'react';
import { Factory } from '@/components/factory';
import { ButtonUnstyled } from './ButtonUnstyled';

type ButtonProps = {
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

type ButtonFactory = Factory.Config<{
  component: 'button';
  props: ButtonProps;
}>;

export const Button = Factory.createPolymorphic<ButtonFactory>((props, ref) => {
  const { component = 'button', children, ...otherProps } = props;
  return (
    <ButtonUnstyled component={component} {...otherProps} ref={ref}>
      {children}
    </ButtonUnstyled>
  );
});
