import * as React from 'react';
import { type CoreProps, type Elements, type Tags } from '.';

type FactoryKey = keyof CoreProps;
type FactoryRef<K extends FactoryKey> = Elements[K];
type FactoryProp<K extends FactoryKey> = { component?: Tags[K] };
type FactoryCoreProps<K extends FactoryKey> = CoreProps[K];
type FactoryProps<K extends FactoryKey> = Omit<FactoryCoreProps<K> & FactoryProp<K>, 'ref'>;

export type FactoryPayload = {
  component: FactoryKey;
  components?: Record<string, any>;
};

type FactoryRender<K extends FactoryKey> = React.ForwardRefRenderFunction<
  FactoryRef<K>,
  FactoryProps<K>
>;

type FactoryComponent<K extends FactoryKey> = React.ForwardRefExoticComponent<FactoryProps<K>>;

export function factory<Payload extends FactoryPayload>(ui: FactoryRender<Payload['component']>) {
  type Factory = FactoryComponent<Payload['component']> & Payload['components'];
  const Component = React.forwardRef(ui) as Factory;
  return Component as Factory;
}

export type Factory<Payload extends FactoryPayload> = Payload;
