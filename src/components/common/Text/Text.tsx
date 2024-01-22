import * as React from 'react';
import { createThemeClasses } from '@/utils';
import { type TBDXTextThemeOptions } from '@/core/theme';
import { type PolymorphicFactory, createPolymorphicFactory } from '@/core/factory';

export interface TextProps extends TBDXTextThemeOptions {
  span?: boolean;
  strong?: boolean;
  children?: React.ReactNode;
}

export type TextFactory = PolymorphicFactory<{
  props: TextProps;
  component: 'p' | 'span' | 'strong';
  components: {};
}>;

export const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const {
    span,
    strong,
    size = 'sm',
    scheme = 'default',
    variant = 'default',
    alignment = 'start',
    className: defaultClassName,
    component = 'p',
    children,
    ...otherProps
  } = props;

  const Component = span ? 'span' : strong ? 'strong' : component;

  const className = createThemeClasses({
    base: 'Text',
    modifiers: { Component, size, scheme, variant, alignment },
    className: defaultClassName,
  });

  return (
    <Component {...otherProps} ref={ref} className={className}>
      {children}
    </Component>
  );
});
