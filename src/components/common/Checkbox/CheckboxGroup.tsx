import { type Factory, createStatic } from '@/components/factory';
import clsx from 'clsx';
import React from 'react';

export type CheckboxGroupProps = {
  scheme?: 'primary' | 'secondary' | 'action';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'rd';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export type CheckboxGroupFactory = Factory.Config<{
  props: CheckboxGroupProps;
  component: 'fieldset';
}>;

export type CheckboxGroupContextValue = CheckboxGroupProps & {};

export const CheckboxGroupContext = React.createContext<CheckboxGroupContextValue>({});
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export const useCheckboxGroupContext = () => React.useContext(CheckboxGroupContext);

export const CheckboxGroup = createStatic<CheckboxGroupFactory>((props) => {
  const { children, scheme, radius, size, ...otherProps } = props;
  const className = clsx('CheckboxGroup');
  return (
    <fieldset {...otherProps} className={className}>
      <CheckboxGroupProvider value={{ scheme, radius, size }}>{children}</CheckboxGroupProvider>
    </fieldset>
  );
});
