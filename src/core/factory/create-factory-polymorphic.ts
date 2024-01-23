import * as React from 'react';

type FactoryPayload = {
  props?: Record<string, any>;
  components?: Record<string, any>;
  component: keyof JSX.IntrinsicElements;
};

type MergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;

type ElementType<E extends keyof JSX.IntrinsicElements> = {
  [K in E]: K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : never;
}[E];

type ComponentProps<E extends keyof JSX.IntrinsicElements, P = {}> = MergeProps<
  React.ComponentPropsWithoutRef<E>,
  React.ComponentProps<E> & P & { component?: any }
>;

type RefComponentFunction<E extends keyof JSX.IntrinsicElements, P = {}> = (
  props: ComponentProps<E, P>,
  ref: React.ForwardedRef<ElementType<E>>
) => React.ReactElement;

type Components<R> = R extends Record<string, any> ? R : Record<string, never>;

export const createPolymorphicFactory = <Payload extends FactoryPayload>(
  ui: RefComponentFunction<Payload['component'], Payload['props']>
) => {
  type Props = ComponentProps<Payload['component'], Payload['props']>;
  type Component = React.ForwardRefExoticComponent<Props>;
  type FactoryComponent = Component & Components<Payload['components']>;
  const Factory = React.forwardRef(ui) as unknown as FactoryComponent;
  return Factory as FactoryComponent;
};

export type PolymorphicFactory<Payload extends FactoryPayload> = Payload;
