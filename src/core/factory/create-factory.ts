import * as React from 'react';

type FactoryPayload = {
  props?: Record<string, any>;
  components?: Record<string, any>;
  component: keyof JSX.IntrinsicElements;
};

type MergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;

type FilterProps<P = {}, U = any> = Pick<P, Exclude<keyof P, U>>;

type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? FilterProps<P, 'ref'> : P) : P;

type ElementType<E extends keyof JSX.IntrinsicElements> = {
  [K in E]: K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : never;
}[E];

type BaseProps<E extends keyof JSX.IntrinsicElements> = PropsWithoutRef<E>;

type ComponentProps<E extends keyof JSX.IntrinsicElements, P = {}> = MergeProps<
  BaseProps<E>,
  React.ComponentProps<E> & P
>;

type RefComponentFunction<E extends keyof JSX.IntrinsicElements, P = {}> = (
  props: ComponentProps<E, P>,
  ref: React.ForwardedRef<ElementType<E>>
) => React.ReactElement;

type Components<R> = R extends Record<string, any> ? R : Record<string, never>;

export const createFactory = <Payload extends FactoryPayload>(
  ui: RefComponentFunction<Payload['component'], Payload['props']>
) => {
  type _FactoryProps = ComponentProps<Payload['component'], Payload['props']>;
  type _FactoryComponent = React.ForwardRefExoticComponent<_FactoryProps>;
  type FactoryComponent = _FactoryComponent & Components<Payload['components']>;
  return React.forwardRef(ui) as unknown as FactoryComponent;
};

export type Factory<Payload extends FactoryPayload> = Payload;
