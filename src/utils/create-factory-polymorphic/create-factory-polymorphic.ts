import * as React from 'react';

interface FactoryPayload {
  defaultRef: any;
  defaultComponent: any;
  components?: Record<string, any>;
  props?: Record<string, any>;
}

type FactoryElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

type FactoryPropsExtended<Payload extends FactoryPayload> = {};

type FactoryPropsInherited<Payload extends FactoryPayload> = {};

type FactoryElementProps<Payload extends FactoryPayload> = {};

type FactoryComponentRef<Payload extends FactoryPayload> = {};

type FactoryComponentProps<Payload extends FactoryPayload> = {};

function createPolymorphicFactory<Payload extends FactoryPayload>(component: any) {}

type PolymorphicFactory<Payload extends FactoryPayload> = Payload;

export {
  type FactoryPropsInherited as PolymorphicFactoryPropsInherited,
  type FactoryPropsExtended as PolymorphicFactoryPropsExtended,
  type FactoryElementType as PolymorphicFactoryElementType,
  type FactoryElementProps as PolymorphicFactoryElementProps,
  type FactoryComponentRef as PolymorphicFactoryComponentRef,
  type FactoryComponentProps as PolymorphicFactoryComponentProps,
  createPolymorphicFactory,
  type PolymorphicFactory,
};

// type FactoryPayload = {
//   element?: any;
//   components?: Record<any, any>;
//   props?: Record<any, any>;
//   ref?: any;
// };

// type FactoryExtendedProps<P = {}, O = {}> = O & Omit<P, keyof O>;

// type FactoryElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

// type FactoryElementProps<FactoryElement extends React.ElementType> = JSX.LibraryManagedAttributes<
//   FactoryElement,
//   React.ComponentPropsWithoutRef<FactoryElement>
// >;

// type FactoryComponentProp<C> = {
//   component?: C;
// };

// type FactoryInheritedProps<
//   FactoryElement extends FactoryElementType,
//   FactoryProps = {},
// > = FactoryExtendedProps<FactoryElementProps<FactoryElement>, FactoryProps>;

// export type FactoryPolymorphicRef<FactoryElement> = FactoryElement extends React.ElementType
//   ? React.ComponentPropsWithRef<FactoryElement>['ref']
//   : never;

// export type FactoryPolymorphicComponentProps<
//   FactoryElement,
//   FactoryProps = {},
// > = FactoryElement extends React.ElementType
//   ? FactoryInheritedProps<FactoryElement, FactoryProps & FactoryComponentProp<FactoryElement>> & {
//       ref?: FactoryPolymorphicRef<FactoryElement>;
//       renderRoot?: (props: any) => any;
//     }
//   : FactoryProps & {
//       component: React.ElementType;
//       renderRoot?: (props: Record<string, any>) => any;
//     };

// export function createPolymorphicFactory<
//   FactoryDefaultComponent,
//   FactoryProps,
//   FactoryStaticComponents = Record<string, never>,
// >(component: any) {
//   type FactoryComponentProps<FactoryElement> = FactoryPolymorphicComponentProps<
//     FactoryElement,
//     FactoryProps
//   >;

//   type _FactoryPolymorphicComponent = <FactoryElement = FactoryDefaultComponent>(
//     props: FactoryComponentProps<FactoryElement>
//   ) => React.ReactElement;

//   type FactoryComponentProperties = Omit<React.FC<FactoryComponentProps<any>>, never>;

//   type FactoryPolymorphicComponent = _FactoryPolymorphicComponent &
//     FactoryComponentProperties &
//     FactoryStaticComponents;

//   return component as FactoryPolymorphicComponent;
// }

// type FactoryOverrides<P = {}, O = {}> = Omit<P, keyof O>;
// type FactoryExtends<P = {}, O = {}> = O & FactoryOverrides<P, O>;

// type FactoryElement = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
// type FactoryElementProp<C> = { component?: C };

// type FactoryInheritedProps<C extends FactoryElement, BaseFactoryProps = {}> = FactoryExtends<
//   JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>,
//   BaseFactoryProps
// >;

// type FactorySubcomponents<Input> = Input extends Record<string, any>
//   ? Input
//   : Record<string, never>;

// type PolymorphicRef<C> = C extends React.ElementType
//   ? React.ComponentPropsWithRef<C>['ref']
//   : never;

// type PolymorphicProps<C, BaseFactoryProps = {}> = C extends React.ElementType
//   ? FactoryInheritedProps<C, BaseFactoryProps & FactoryElementProp<C>> & {
//       ref?: PolymorphicRef<C>;
//     }
//   : BaseFactoryProps & {
//       component: React.ElementType;
//     };

// function createFactoryPolymorphic<Payload extends PolymorphicFactoryPayload>(
//   ui: React.ForwardRefRenderFunction<Payload['defaultRef'], Payload['props']>
// ) {
//   type _PolymorphicComponentProps<C> = PolymorphicProps<C, Payload['props']>;

//   type _PolymorphicComponent = <C = Payload['defaultComponent']>(
//     props: _PolymorphicComponentProps<C>
//   ) => React.ReactElement;

//   type PolymorphicComponentProps = Omit<
//     React.FunctionComponent<_PolymorphicComponentProps<any>>,
//     never
//   >;

//   type PolymorphicComponent = _PolymorphicComponent &
//     PolymorphicComponentProps &
//     FactorySubcomponents<Payload['components']>;

//   const Component = React.forwardRef(ui) as unknown as PolymorphicComponent;
//   return Component as PolymorphicComponent;
// }

// type PolymorphicFactory<Payload extends PolymorphicFactoryPayload> = Payload;

// type TPropsCard = { customProp?: string; customFunc?: () => void };

// type TFactoryCard = PolymorphicFactory<{
//   defaultComponent: 'div';
//   defaultRef: HTMLDivElement;
//   props: TPropsCard & { component: any };
//   // ref: HTMLDivElement;
// }>;

// const Card = createFactoryPolymorphic<TFactoryCard>((props, ref) => {
//   const { component: Component, customFunc, customProp, ...otherProps } = props;
//   return <Component ref={ref} {...otherProps}></Component>;
// });

// type TestBoxFactory = PolymorphicFactory<{
//   // component: 'div';
//   props: { customProp: string };
//   ref: HTMLDivElement;
// }>;

// type FactoryComponentProp<C> = { component: C };

// type FactoryComponentProps<C extends keyof React.ElementType> = JSX.IntrinsicElements[C]

// type ElementType<P = any, C extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> =
//   | { [K in C]: P extends JSX.IntrinsicElements[K] ? K : never }[C]
//   | React.ComponentType<P>;

// // type ComponentType<P = {}> = React.ComponentClass<P, any> | React.FunctionComponent<P>;

// type FactoryComponentType<P = {}> = React.ComponentClass<P, any> | React.FunctionComponent<P>;

// type FactoryElementType<
//   P = any,
//   C extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements,
// > = { [K in C]: P extends JSX.IntrinsicElements[K] ? K : never }[C] | FactoryComponentType<P>;

// type FactoryProps<
//   Payload extends FactoryPayload = FactoryPayload,
//   Component extends FactoryElementType = FactoryElementType,
// > = Payload['props'] & JSX.IntrinsicElements[Payload['component']] & { component?: Component };

// type FactoryComponent<
//   Payload extends FactoryPayload = FactoryPayload,
//   Component extends FactoryElementType = FactoryElementType,
// > = (props: FactoryProps<Payload, Component>) => React.ReactElement;

// type FactoryRefFunction<Payload extends FactoryPayload = FactoryPayload> =
//   React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>;

// type FactoryComponentPropsWithoutRef<Payload extends FactoryPayload = FactoryPayload> =
//   React.ComponentPropsWithoutRef<Payload['ref']>;

// export type FactoryComponent<
//   Payload extends FactoryPayload = FactoryPayload,
//   Component extends FactoryElementType = FactoryElementType,
// > = React.ForwardRefExoticComponent<
//   FactoryProps<Payload, Component> & FactoryComponentPropsWithoutRef<Payload>
// >;

// export function createFactoryPolymorphic<
//   Component extends FactoryElementType = FactoryElementType,
// >(ui: FactoryRefFunction<Payload>) {
//   const PolymorphicComponent = React.forwardRef(ui) as FactoryComponent<Payload, Component>;
//   return PolymorphicComponent as FactoryComponent<Payload, Component>;
// }

// const Card = createFactoryPolymorphic<'div', TestBoxFactory>((props, ref) => {
//   const { component: Component = 'div', ...otherProps } = props;
//   return (
//     <Component ref={ref} {...otherProps}>
//       Card Component
//     </Component>
//   );
// });

// const Card = <C extends keyof JSX.IntrinsicElements>(
//   props: { component: C } & JSX.IntrinsicElements[C]
// ) => {
//   const { component: Component = 'div', ...otherProps } = props;
//   return <Component {...otherProps}>Card Component</Component>;
// };
