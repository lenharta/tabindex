import { TFilterProps, TMergeProps } from '@/core/types';
import * as React from 'react';

type FactoryPayload = {
  component: keyof JSX.IntrinsicElements;
  components?: Record<string, any>;
  props?: Record<string, any>;
};

type FactoryAttributes<E extends keyof JSX.IntrinsicElements> =
  E extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[E] : {};

type TFactoryStaticComponents<R> = R extends Record<string, any> ? R : Record<string, never>;

type FactoryPropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? TFilterProps<P, 'ref'>
    : P
  : P;

type FactoryMergedProps<E extends keyof JSX.IntrinsicElements, P = {}> = TMergeProps<
  FactoryPropsWithoutRef<FactoryAttributes<E>>,
  React.ComponentProps<E> & P
>;

type FactoryElement<E extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
  [K in E]: K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : never;
}[E];

type FactoryComponentFunction<E extends keyof JSX.IntrinsicElements, P = {}> = {
  (props: FactoryMergedProps<E, P>, ref: React.ForwardedRef<FactoryElement<E>>): React.ReactElement;
  displayName?: string | undefined;
};

type FactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  FactoryMergedProps<Payload['component'], Payload['props']>
>;

export function createFactory<Payload extends FactoryPayload>(
  ui: FactoryComponentFunction<Payload['component'], Payload['props']>
) {
  type ComponentType = FactoryComponent<Payload> & TFactoryStaticComponents<Payload['components']>;
  const Component = React.forwardRef(ui) as unknown as ComponentType;
  return Component as ComponentType;
}

export type Factory<T extends FactoryPayload> = T;

// type TSubComponent<Payload> = Payload extends Record<string, any> ? Payload : Record<string, never>;

// type TFactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
//   Payload['props'] & React.RefAttributes<Payload['ref']>
// >;

// type TFactoryComponentType<Payload extends FactoryPayload> = TFactoryComponent<Payload> &
//   TSubComponent<Payload['components']>;

// export function createFactory<Payload extends FactoryPayload>(
//   ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
// ) {
//   const CoreComponent = React.forwardRef(ui) as TFactoryComponentType<Payload>;
//   return CoreComponent as TFactoryComponentType<Payload>;
// }

// export type Factory<T extends FactoryPayload> = T;
