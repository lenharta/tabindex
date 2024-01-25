import * as React from 'react';
import { type CoreElements, type CoreProps } from './types';
import { ExtendProps, FilterProps } from '@/core/types';

export type FactoryPayload = {
  props?: Record<string, any>;
  component: FactoryKey;
  components?: Record<string, any>;
  omittedProps?: string;
};

type FactoryKey = keyof CoreElements;
type FactoryRef<K extends FactoryKey> = CoreElements[K];
type FactoryCore<K extends FactoryKey> = CoreProps[K];
type FactoryRefProp<K extends FactoryKey> = { ref?: React.ForwardedRef<FactoryRef<K>> };

type FactoryProps<Payload extends FactoryPayload> = FilterProps<
  FactoryCore<Payload['component']> & { component?: any } & Payload['props'],
  'ref' & Payload['omittedProps']
>;

export type Factory<Payload extends FactoryPayload> = Payload;

export function factory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<FactoryRef<Payload['component']>, FactoryProps<Payload>>
) {
  type FactoryComponent = React.ForwardRefExoticComponent<
    FactoryProps<Payload> & FactoryRefProp<Payload['component']>
  >;
  type Component = FactoryComponent & Payload['components'];
  const Component = React.forwardRef(ui) as unknown as Component;
  return Component as Component;
}
