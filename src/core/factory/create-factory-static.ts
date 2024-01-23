import React from 'react';

type FactoryPayload = {
  props?: Record<string, any>;
  components?: Record<string, any>;
  component: keyof JSX.IntrinsicElements;
};

type Components<R> = R extends Record<string, any> ? R : Record<string, never>;

type MergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;

type ComponentProps<E extends keyof JSX.IntrinsicElements, P = {}> = MergeProps<
  React.ComponentPropsWithoutRef<E>,
  P
>;

export function createStaticFactory<Payload extends FactoryPayload>(
  ui: React.FC<ComponentProps<Payload['component'], Payload['props']>>
) {
  type Component = React.FC<ComponentProps<Payload['component'], Payload['props']>>;
  type FactoryComponent = Component & Components<Payload['components']>;
  return ui as unknown as FactoryComponent;
}

export type StaticFactory<Payload extends FactoryPayload> = Payload;
