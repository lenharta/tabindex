import * as React from 'react';
import type { Factory } from '@/core/factory';
import { createFactory } from '@/core/factory';
import { Button, Label, Text } from '@/common/Unstyled';

export interface InputTextProps {
  id?: string | undefined;
  key?: React.Key | undefined;
  text?: string | undefined;
}

export interface InputErrorProps extends InputTextProps {}

export const InputError = (props: InputErrorProps) => {
  const { text, ...otherProps } = props;
  return <Text {...otherProps}>{text}</Text>;
};

export interface InputMessageProps extends InputTextProps {}

export const InputMessage = (props: InputErrorProps) => {
  const { text, ...otherProps } = props;
  return <Text {...otherProps}>{text}</Text>;
};

export interface InputLabelProps extends InputTextProps {
  htmlFor?: string;
  position?: 'left' | 'right';
}

export const InputLabel = (props: InputLabelProps) => {
  const { position, text, ...otherProps } = props;
  return (
    <Label {...otherProps} data-position={position}>
      {text}
    </Label>
  );
};

export interface InlineInputProps {
  label?: React.ReactNode;
  labelPosition?: 'left' | 'right';
}

export type InlineInputFactory = Factory<{
  props: InlineInputProps;
  component: 'button';
  components: {};
}>;

export const InlineInput = createFactory<InlineInputFactory>((props, ref) => {
  const { children, label, ...otherProps } = props;
  return (
    <Button {...otherProps} ref={ref}>
      {children}
      <div>{label}</div>
    </Button>
  );
});
