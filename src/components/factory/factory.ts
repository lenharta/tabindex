import * as React from 'react';

// TODO: Replace `ElementType` with `ComponentType`

export declare namespace Factory {
  export type Tag = React.ElementType;

  export type Prop<T extends Tag> = { component?: T };

  export type Identifer = { displayName?: string };

  export type Reference<T extends Tag> = React.ComponentPropsWithRef<T>['ref'];

  export type Attributes<T extends Tag> = React.ComponentPropsWithoutRef<T>;

  export type Properties<T extends Tag, P = {}> = Attributes<T> & Prop<T> & P;

  export interface Payload {
    props?: Record<string, any>;
    component?: any;
    components?: Record<string, any>;
  }

  export type Config<Payload extends Factory.Payload> = Payload;

  export type Render<Payload extends Factory.Payload> = <T extends Tag>(
    props: Properties<T, Payload['props']>,
    ref: React.ForwardedRef<Reference<T>>
  ) => React.ReactNode;

  export type Component<Payload extends Factory.Payload> = <T extends Tag = Payload['component']>(
    props: Properties<T, Payload['props']> & { ref?: Reference<T> }
  ) => React.ReactNode;

  export function createPolymorphic<Payload extends Factory.Payload>(
    ui: Factory.Render<Payload>
  ): Factory.Component<Payload> & Payload['components'] & Identifer;

  export function createStatic<Payload extends Factory.Payload>(
    ui: (props: Attributes<Payload['component']> & Payload['props']) => JSX.Element
  ): React.FC<Attributes<Payload['component']> & Payload['props']> & Payload['components'];
}

export const createStatic: typeof Factory.createStatic = (ui) => ui;

export const createPolymorphic: typeof Factory.createPolymorphic = (ui) => React.forwardRef(ui);
