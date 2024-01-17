import * as React from 'react';
import { type TFilterProps, type TMergeProps } from '@/core/types';

type FactoryAttributes<E extends keyof JSX.IntrinsicElements> =
  E extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[E] : {};

type FactoryPropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? TFilterProps<P, 'ref'>
    : P
  : P;

type FactoryMergedProps<E extends keyof JSX.IntrinsicElements, P = {}> = TMergeProps<
  FactoryPropsWithoutRef<FactoryAttributes<E>>,
  React.ComponentProps<E> & P & { component?: any }
>;

type FactoryElement<E extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
  [K in E]: K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : never;
}[E];

type FactoryComponentFunction<E extends keyof JSX.IntrinsicElements, P = {}> = {
  (props: FactoryMergedProps<E, P>, ref: React.ForwardedRef<FactoryElement<E>>): React.ReactElement;
  displayName?: string | undefined;
};

interface PolymorphicPayload {
  component: keyof JSX.IntrinsicElements;
  components?: Record<string, any>;
  props?: Record<string, any>;
}

const createPolymorphicFactory = <Payload extends PolymorphicPayload>(
  ui: FactoryComponentFunction<Payload['component'], Payload['props']>
) => {
  type ComponentType = React.ForwardRefExoticComponent<
    FactoryMergedProps<Payload['component'], Payload['props']>
  >;
  const Component = React.forwardRef(ui) as unknown as ComponentType;
  return Component as ComponentType;
};

type PolymorphicFactory<Payload extends PolymorphicPayload> = Payload;

export {
  type FactoryElement as PolymorphicFactoryElement,
  type FactoryAttributes as PolymorphicFactoryAttributes,
  type FactoryMergedProps as PolymorphicFactoryMergedProps,
  type FactoryPropsWithoutRef as PolymorphicFactoryPropsWithoutRef,
  type FactoryComponentFunction as PolymorphicFactoryComponentFunction,
  createPolymorphicFactory,
  type PolymorphicPayload,
  type PolymorphicFactory,
};
