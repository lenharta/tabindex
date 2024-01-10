import { forwardRef } from 'react';

type Payload = {
  ref: any;
  props?: Record<any, any>;
  components?: Record<any, any>;
};

type SubComponents<P> = P extends Record<string, any> ? P : Record<string, never>;

type Component<P extends Payload> = React.ForwardRefExoticComponent<
  P['props'] & React.RefAttributes<P['ref']>
>;

export function factory<P extends Payload>(
  ui: React.ForwardRefRenderFunction<P['ref'], P['props']>
) {
  const Component = forwardRef(ui) as Component<P> & SubComponents<P['components']>;
  return Component as Component<P> & SubComponents<P['components']>;
}

export type Factory<P extends Payload> = P;
