import * as React from 'react';
import { type ButtonScheme, type ButtonVariant } from './Button';
import { type Factory, createStatic } from '@/components/factory';
import { type TBDX } from '@/types';
import { cx } from '../utils';
import clsx from 'clsx';

export type ButtonGroupProps = {
  disabled?: boolean;
  readonly?: boolean;
  orientation?: TBDX.Orientation;
  variant?: ButtonVariant;
  scheme?: ButtonScheme;
  align?: TBDX.Alignment;
  size?: TBDX.Size;
};

export type ButtonGroupContextValue = {
  disabled?: boolean;
  readonly?: boolean;
  variant?: ButtonVariant;
  align?: TBDX.Alignment;
  size?: TBDX.Size;
};

export type ButtonGroupFactory = Factory.Config<{
  component: 'div';
  props: ButtonGroupProps;
}>;

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({});
export const ButtonGroupProvider = ButtonGroupContext.Provider;
export const useButtonContext = () => React.useContext(ButtonGroupContext);

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup = createStatic<ButtonGroupFactory>((props) => {
  const {
    orientation,
    className,
    disabled,
    readonly,
    children,
    variant,
    scheme,
    align,
    size,
    ...otherProps
  } = props;

  const clxssName = clsx(
    'tbdx-button-group',
    {
      [`tbdx-button-group-${size}`]: size,
      [`tbdx-button-group-${orientation}`]: orientation,
    },
    className
  );

  return (
    <div
      {...otherProps}
      className={clxssName}
      aria-orientation={orientation || defaultProps.orientation}
    >
      <ButtonGroupProvider value={{ disabled, readonly, variant, align, size }}>
        {children}
      </ButtonGroupProvider>
    </div>
  );
});

ButtonGroup.displayName = '@TBDX/Button.Group';
