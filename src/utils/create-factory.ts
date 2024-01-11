import * as React from 'react';

type Payload = {
  components?: Record<string, any>;
  props?: Record<string, any>;
  ref?: any;
};

type Components<T> = T extends Record<string, any> ? T : Record<string, never>;

type Component<FactoryPayload extends Payload> = React.ForwardRefExoticComponent<
  FactoryPayload['props'] & React.RefAttributes<FactoryPayload['ref']>
> &
  Components<FactoryPayload['components']>;

type ComponentRender<FactoryPayload extends Payload> = React.ForwardRefRenderFunction<
  FactoryPayload['ref'],
  FactoryPayload['props']
>;

export function factory<FactoryPayload extends Payload>(ui: ComponentRender<FactoryPayload>) {
  const AtomComponent = React.forwardRef(ui) as Component<FactoryPayload>;
  return AtomComponent as Component<FactoryPayload>;
}

export type Factory<FactoryPayload extends Payload> = FactoryPayload;
