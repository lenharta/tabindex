import clsx from 'clsx';
import React from 'react';
import { type Factory, createPolymorphic } from '@/components/factory';

type ButtonGroupProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  variant?: 'solid' | 'outlined' | 'tonal' | 'ghost';
  orientation?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  disabled?: boolean;
  readonly?: boolean;
};

type ButtonGroupFactory = Factory.Config<{
  component: 'div';
  props: ButtonGroupProps;
}>;

type ButtonGroupContextValue = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  variant?: 'solid' | 'outlined' | 'tonal' | 'ghost';
  orientation?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  component?: React.ElementType;
  disabled?: boolean;
  readonly?: boolean;
};

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({});
export const ButtonGroupProvider = ButtonGroupContext.Provider;
export const useButtonContext = () => React.useContext(ButtonGroupContext);

export const ButtonGroup = createPolymorphic<ButtonGroupFactory>((props, ref) => {
  const {
    disabled,
    readonly,
    children,
    component: Component = 'div',
    orientation = 'horizontal',
    alignment = 'start',
    justify = 'start',
    variant = 'solid',
    scheme = 'primary',
    size = 'sm',
    ...otherProps
  } = props;

  const className = clsx('ButtonGroup', {
    [`ButtonGroup--${size}`]: size !== undefined,
    [`ButtonGroup--${scheme}`]: scheme !== undefined,
    [`ButtonGroup--${variant}`]: variant !== undefined,
    [`ButtonGroup--${alignment}`]: alignment !== undefined,
  });

  const dataProps = {
    'data-readonly': readonly,
    'data-disabled': disabled,
    'data-orientation': orientation,
  };

  const ariaProps = {
    'aria-readonly': readonly,
    'aria-disabled': disabled,
    'aria-orientation': orientation,
  };

  return (
    <Component {...otherProps} {...dataProps} {...ariaProps} className={className} ref={ref}>
      <ButtonGroupProvider
        value={{
          disabled,
          readonly,
          component: Component,
          orientation,
          alignment,
          justify,
          variant,
          scheme,
          size,
        }}
      >
        {children}
      </ButtonGroupProvider>
    </Component>
  );
});

ButtonGroup.displayName = '@TBDX/Button.Group';
