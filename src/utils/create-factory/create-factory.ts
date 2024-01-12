import * as React from 'react';

type Payload = {
  components?: Record<string, any>;
  props?: Record<string, any>;
  ref?: any;
};

type TSubComponent<T> = T extends Record<string, any> ? T : Record<string, never>;

type TComponent<T extends Payload> = React.ForwardRefExoticComponent<
  T['props'] & React.RefAttributes<T['ref']>
>;

type TFactoryComponent<T extends Payload> = TComponent<T> & TSubComponent<T['components']>;

export function createFactory<T extends Payload>(
  ui: React.ForwardRefRenderFunction<T['ref'], T['props']>
) {
  const CoreComponent = React.forwardRef(ui) as TFactoryComponent<T>;
  return CoreComponent as TFactoryComponent<T>;
}

export type Factory<T extends Payload> = T;
