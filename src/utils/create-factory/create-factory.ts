import * as React from 'react';

type FactoryPayload = {
  components?: Record<string, any>;
  props?: Record<string, any>;
  ref?: any;
};

type TSubComponent<Payload> = Payload extends Record<string, any> ? Payload : Record<string, never>;

type TFactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  Payload['props'] & React.RefAttributes<Payload['ref']>
>;

type TFactoryComponentType<Payload extends FactoryPayload> = TFactoryComponent<Payload> &
  TSubComponent<Payload['components']>;

export function createFactory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
) {
  const CoreComponent = React.forwardRef(ui) as TFactoryComponentType<Payload>;
  return CoreComponent as TFactoryComponentType<Payload>;
}

export type Factory<T extends FactoryPayload> = T;
