import * as React from 'react';
import { type CoreProps, type Elements, type Tags } from './types';

type FactoryKey = keyof CoreProps;
type FactoryRef<K extends FactoryKey> = Elements[K];
type FactoryProp<K extends FactoryKey> = { component?: Tags[K] };
type FactoryCoreProps<K extends FactoryKey> = CoreProps[K];
type FactoryProps<K extends FactoryKey> = Omit<FactoryCoreProps<K> & FactoryProp<K>, 'ref'>;

export type FactoryPayload = {
  props?: Record<string, any>;
  component: FactoryKey;
  components?: Record<string, any>;
};

type FactoryRender<Payload extends FactoryPayload> = React.ForwardRefRenderFunction<
  FactoryRef<Payload['component']>,
  FactoryProps<Payload['component']> & Payload['props']
>;

type FactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  FactoryProps<Payload['component']> & Payload['props']
>;

export function factory<Payload extends FactoryPayload>(ui: FactoryRender<Payload>) {
  type Factory = FactoryComponent<Payload> & Payload['components'];
  const Component = React.forwardRef(ui) as Factory;
  return Component as Factory;
}

export type Factory<Payload extends FactoryPayload> = Payload;
