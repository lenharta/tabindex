import * as React from 'react';

// TODO: Replace `ElementType` with `ComponentType`

export declare namespace Factory {
  export type Tag = React.ElementType;

  export interface Payload {
    props?: Record<string, any>;
    component?: any;
    components?: Record<string, any>;
  }

  export type Prop<T extends Tag> = { component?: T };
  export type Attributes<T extends Tag> = React.ComponentPropsWithoutRef<T>;
  export type Reference<T extends Tag> = React.ComponentPropsWithRef<T>['ref'];
  export type Properties<T extends Tag, P = {}> = Attributes<T> & Prop<T> & P;

  export type Render<Payload extends Factory.Payload> = <T extends Tag>(
    props: Properties<T, Payload['props']>,
    ref: React.ForwardedRef<Reference<T>>
  ) => React.ReactNode;

  export type Component<Payload extends Factory.Payload> = <T extends Tag = Payload['component']>(
    props: Properties<T, Payload['props']> & { ref?: Reference<T> }
  ) => React.ReactNode;

  export type Config<Payload extends Factory.Payload> = Payload;

  export function createPolymorphic<Payload extends Factory.Payload>(
    ui: Factory.Render<Payload>
  ): Factory.Component<Payload> & Payload['components'];
}

export const createPolymorphic: typeof Factory.createPolymorphic = (ui) => {
  const FactoryComponent = React.forwardRef(ui);
  return FactoryComponent;
};
