import clsx from 'clsx';
import React from 'react';
import { type Factory, createStatic } from '@/components/factory';

// scheme?: 'primary' | 'secondary' | 'action';
// variant?: 'solid' | 'outlined' | 'tonal' | 'ghost';

type ButtonGroupProps = {
  readonly?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type ButtonGroupFactory = Factory.Config<{
  component: 'div';
  props: ButtonGroupProps;
}>;

type ButtonGroupContextValue = {
  readonly?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({});
export const ButtonGroupProvider = ButtonGroupContext.Provider;
export const useButtonContext = () => React.useContext(ButtonGroupContext);

export const ButtonGroup = createStatic<ButtonGroupFactory>((props) => {
  const {
    disabled,
    readonly,
    children,
    orientation = 'horizontal',
    alignment = 'start',
    justify = 'start',
    size = 'sm',
    ...otherProps
  } = props;

  const className = clsx('ButtonGroup', {
    [`ButtonGroup--${size}`]: size !== undefined,
    [`ButtonGroup--${alignment}`]: alignment !== undefined,
  });

  const dataProps = {
    'data-orientation': orientation,
  };

  const ariaProps = {
    'aria-orientation': orientation,
  };

  return (
    <div {...otherProps} {...dataProps} {...ariaProps} className={className}>
      <ButtonGroupProvider
        value={{
          disabled,
          readonly,
          orientation,
          alignment,
          justify,
          size,
        }}
      >
        {children}
      </ButtonGroupProvider>
    </div>
  );
});

ButtonGroup.displayName = '@TBDX/Button.Group';
