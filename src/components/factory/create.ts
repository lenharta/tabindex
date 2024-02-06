import * as React from 'react';
import { CORE } from './core';

export const createBasicFactory = <Payload extends CORE.FactoryPayload>(
  ui: (
    props: CORE.Override<
      React.ComponentPropsWithoutRef<Payload['component']>,
      Payload['props'] & { component: Payload['component'] }
    >
  ) => React.ReactNode
) => {
  type ComponentProps = CORE.Override<
    React.ComponentPropsWithoutRef<Payload['component']>,
    Payload['props'] & {
      ref?: React.ComponentPropsWithRef<Payload['component']>['ref'];
    }
  >;

  type _BasicComponent = React.FC<ComponentProps> & Payload['components'];

  const BasicComponent = ui as unknown as _BasicComponent;

  return BasicComponent as _BasicComponent;
};

export const createStaticFactory = <Payload extends CORE.FactoryPayload>(
  ui: (
    props: CORE.Override<
      React.ComponentPropsWithoutRef<Payload['component']>,
      Payload['props'] & { component?: Payload['component'] } & {
        ref?: React.ComponentPropsWithRef<Payload['component']>['ref'];
      }
    >,
    ref: React.ForwardedRef<Payload['ref']>
  ) => React.ReactNode
) => {
  type ComponentProps = CORE.Override<
    React.ComponentPropsWithoutRef<Payload['component']>,
    Payload['props'] & {
      ref?: React.ComponentPropsWithRef<Payload['component']>['ref'];
    }
  >;

  type _StaticComponent = React.ForwardRefExoticComponent<ComponentProps> & Payload['components'];

  const StaticComponent = React.forwardRef(ui) as unknown as _StaticComponent;

  return StaticComponent as _StaticComponent;
};

export const createPolymorphicFactory = <Payload extends CORE.FactoryPayload>(
  ui: (
    props: CORE.Override<
      React.ComponentPropsWithoutRef<Payload['component']>,
      Payload['props'] & { component?: Payload['component'] } & {
        ref?: React.ComponentPropsWithRef<Payload['component']>['ref'];
      }
    >,
    ref: React.ForwardedRef<Payload['ref']>
  ) => React.ReactNode
) => {
  type ComponentProps<T extends React.ElementType> = CORE.Override<
    React.ComponentPropsWithoutRef<T>,
    Payload['props'] & { component?: T } & {
      ref?: React.ComponentPropsWithRef<T>['ref'];
    }
  >;

  type _Component = <T extends React.ElementType = Payload['component']>(
    props: ComponentProps<T>
  ) => React.ReactNode;

  type _ComponentProps = Omit<React.FunctionComponent<ComponentProps<any>>, never>;

  type _PolymorphicComponent = _Component & _ComponentProps & Payload['components'];

  const PolymorphicComponent = React.forwardRef(ui) as unknown as _PolymorphicComponent;

  return PolymorphicComponent as _PolymorphicComponent;
};
