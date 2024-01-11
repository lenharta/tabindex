import * as React from 'react';
import { UnstyledButton } from './Unstyled';
import { type Factory, factory } from '@/utils/create-factory';
import { Icon, TKeyICON } from '../Icon';

type ButtonIconProps = { name?: TKeyICON } & React.SVGAttributes<SVGElement>;

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
