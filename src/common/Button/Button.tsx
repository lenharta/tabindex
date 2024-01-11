import * as React from 'react';
import { UnstyledButton } from './Unstyled';
import { type Factory, factory } from '@/utils/create-factory';
import { Icon, TIconKey } from '../Icon';

type ButtonIconProps = { name?: TIconKey } & React.SVGAttributes<SVGElement>;

const ButtonIcon = (props: ButtonIconProps) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

type ButtonFactory = Factory<{
  ref: HTMLButtonElement;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  components: {
    Icon: typeof ButtonIcon;
  };
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <UnstyledButton {...otherProps} ref={ref}>
      {children}
    </UnstyledButton>
  );
});

Button.Icon = ButtonIcon;
