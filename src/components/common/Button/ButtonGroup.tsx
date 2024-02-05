import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { type ButtonScheme, type ButtonVariant } from './Button';
import { type CORE, createStaticFactory } from '@/components/factory';

export type ButtonGroupContextValue = {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
  scheme?: ButtonScheme;
  variant?: ButtonVariant;
  orientation?: TBDX.Orientation;
  disabled?: boolean;
  readOnly?: boolean;
};

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({});
export const ButtonGroupProvider = ButtonGroupContext.Provider;
export const useButtonContext = () => React.useContext(ButtonGroupContext);

export type ButtonGroupProps = {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
  scheme?: ButtonScheme;
  variant?: ButtonVariant;
  orientation?: TBDX.Orientation;
  disabled?: boolean;
  readOnly?: boolean;
};

export type ButtonGroupFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: ButtonGroupProps;
  component: 'div';
}>;

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup = createStaticFactory<ButtonGroupFactory>((props, ref) => {
  const {
    size,
    align,
    accent,
    radius,
    scheme,
    variant,
    orientation,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxss = clsx('tbdx-button-group', className);
  const _orientation = orientation || defaultProps.orientation;

  return (
    <Component
      {...otherProps}
      data-orientation={_orientation}
      aria-orientation={_orientation}
      data-disabled={disabled}
      aria-disabled={disabled}
      data-readonly={readOnly}
      aria-readonly={readOnly}
      className={clxss}
      ref={ref}
    >
      <ButtonGroupProvider value={{ disabled, readOnly, variant, align, size }}>
        {children}
      </ButtonGroupProvider>
    </Component>
  );
});

ButtonGroup.displayName = '@TBDX/Button.Group';
