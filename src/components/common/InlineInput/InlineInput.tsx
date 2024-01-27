import { type Factory, createPolymorphic } from '@/components/factory';
import { Label } from '../Label';
import { Text } from '../Text';
import React from 'react';

export type InlineInputProps = {
  type?: React.AriaRole;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  error?: string;
  note?: string;
};

export type InlineInputConsumerProps = Omit<InlineInputProps, 'className' | 'children'>;

type InlineInputFactory = Factory.Config<{
  component: 'button';
  props: InlineInputProps;
}>;

export const InlineInput = createPolymorphic<InlineInputFactory>((props, ref) => {
  const {
    type,
    note,
    label,
    error,
    disabled,
    readonly,
    children,
    component: Component = 'button',
    ...otherProps
  } = props;

  const dataProps = {
    'data-readonly': readonly,
    'data-disabled': disabled,
  };

  const ariaProps = {
    'aria-disabled': disabled,
    'aria-readonly': readonly,
  };

  return (
    <Component {...otherProps} {...dataProps} {...ariaProps} role={type} type="button" ref={ref}>
      {children}
      <div>
        {label && <Label>{label}</Label>}
        {error && <Text>{error}</Text>}
        {note && <Text>{note}</Text>}
      </div>
    </Component>
  );
});
