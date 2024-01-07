import type { ButtonHTMLAttributes } from 'react';

type TPropsButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>;

/** Defines properties for the unstyled button component */
export interface IPropsUnstyledButton extends TPropsButton {}

/** Defines properties for the button component */
export interface IPropsButtonProps extends TPropsButton {
  scheme?: 'default' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
