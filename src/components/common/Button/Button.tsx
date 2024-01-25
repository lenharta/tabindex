import { factory, type Factory, type Size, type Alignment } from '@/components/factory';
import { ButtonUnstyled } from './ButtonUnstyled';

export type ButtonProps = {
  size?: Size;
  alignment?: Alignment;
};

export type ButtonFactory = Factory<{
  props: ButtonProps;
  component: 'button';
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const { component, children, ...otherProps } = props;
  return (
    <ButtonUnstyled component={component || 'button'} {...otherProps} ref={ref}>
      {children}
    </ButtonUnstyled>
  );
});

Button.displayName = '@TBDX/Button';

// type FactoryKey = keyof HTMLElementTagNameMap;

// type FactoryFilter<P = {}> = Omit<P, 'ref'>;

// export type FactoryProps<K extends FactoryKey, P = {}> = ExtendProps<
//   FactoryFilter<JSX.IntrinsicElements[K]> & P & { component?: any },
//   P
// >;

// export type FactoryRender<K extends FactoryKey, P = {}> = React.ForwardRefRenderFunction<
//   HTMLElementTagNameMap[K],
//   FactoryProps<K, P> & { ref?: React.ForwardedRef<HTMLElementTagNameMap[K]> }
// >;

// export type FactoryComponent<K extends FactoryKey, P = {}> = React.ForwardRefExoticComponent<
//   FactoryProps<K, P>
// >;

// export interface FactoryPayload {
//   component: any;
//   components?: Record<string, any>;
//   omitProps?: any;
//   props?: Record<string, any>;
// }

// function factory<Payload extends FactoryPayload>(
//   ui: (
//     props: FactoryProps<Payload['component']>,
//     ref: HTMLElementTagNameMap[Payload['component']]
//   ) => React.ReactNode
// ) {
//   type ComponentProps<C extends FactoryKey> = FactoryProps<C>;

//   type ComponentType<C extends FactoryKey = Payload['component']> = (
//     props: ComponentProps<C>
//   ) => React.ReactNode;

//   const Component = React.forwardRef(ui) as unknown as ComponentType;
//   return Component as ComponentType;
// }

// type Factory<Payload extends FactoryPayload> = Payload;

// const testProps: FactoryProps<'a', { custom?: boolean }> = {};

// type TestButtonFactory = Factory<{
//   component: 'button';
//   components: {};
//   omitProps: 'children';
//   props: { someProp?: boolean };
// }>;

// const TestButton = factory<TestButtonFactory>((props, ref) => {
//   const { component, children, ...otherProps } = props;
//   const Component = component || 'button';
//   return (
//     <Component {...otherProps} ref={ref}>
//       {children}
//     </Component>
//   );
// });

// const TestDemo = () => {
//   return (
//     <div>
//       <TestButton component="a">Test Button</TestButton>
//     </div>
//   );
// };

// import { type CoreProps, type Elements, type Tags } from './types';

// type FactoryKey = keyof CoreProps;
// type FactoryRef<K extends FactoryKey> = Elements[K];
// type FactoryProp<K extends FactoryKey> = { component?: Tags[K] };
// type FactoryCoreProps<K extends FactoryKey> = CoreProps[K];
// type FactoryProps<K extends FactoryKey> = Omit<FactoryCoreProps<K> & FactoryProp<K>, 'ref'>;

// export type FactoryPayload = {
//   props?: Record<string, any>;
//   component: FactoryKey;
//   components?: Record<string, any>;
//   omittedProps?: any;
// };

// type FactoryRender<Payload extends FactoryPayload> = React.ForwardRefRenderFunction<
//   FactoryRef<Payload['component']>,
//   FactoryProps<Payload['component']> & Payload['props']
// >;

// type FactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
//   FactoryProps<Payload['component']> & Payload['props']
// >;

// export function factory<Payload extends FactoryPayload>(ui: FactoryRender<Payload>) {
//   type Factory = FactoryComponent<Payload> & Payload['components'];
//   const Component = React.forwardRef(ui) as Factory;
//   return Component as Factory;
// }

// export type Factory<Payload extends FactoryPayload> = Payload;

// import clsx from 'clsx';

// import {
//   factory,
//   type Factory,
//   type Alignment,
//   type FontWeight,
//   type FontSize,
// } from '@/components/factory';

// export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// export type TitleProps = {
//   h1?: boolean | undefined;
//   h2?: boolean | undefined;
//   h3?: boolean | undefined;
//   h4?: boolean | undefined;
//   h5?: boolean | undefined;
//   h6?: boolean | undefined;
//   size?: FontSize;
//   weight?: FontWeight;
//   alignment?: Alignment;
// };

// export type TitleFactory = Factory<{
//   props: TitleProps;
//   component: 'Title';
// }>;

// const findComponent = (props: Record<TitleElement, boolean | undefined>): TitleElement => {
//   const elements = Object.keys(props) as TitleElement[];
//   return elements.find((v) => props[v] === true) as TitleElement;
// };

// export const Title = factory<TitleFactory>((props, ref) => {
//   const {
//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6,
//     size,
//     weight,
//     alignment,
//     className: defaultClassName,
//     children,
//     ...otherProps
//   } = props;

//   const Component = findComponent({ h1, h2, h3, h4, h5, h6 });

//   const className = clsx(
//     'Title',
//     {
//       [`Title--${Component}`]: Component,
//       [`Title--${alignment}`]: alignment !== undefined,
//       [`Title--${weight}`]: weight !== undefined,
//       [`Title--${size}`]: size !== undefined,
//     },
//     defaultClassName
//   );

//   return (
//     <Component {...otherProps} ref={ref} className={className}>
//       {children}
//     </Component>
//   );
// });

// import clsx from 'clsx';
// import { Icon } from '../Icon';
// import { Text } from '../Text';
// import { Label } from '../Label';
// import {
//   factory,
//   type Size,
//   type Factory,
//   type Alignment,
//   type FontWeight,
// } from '@/components/factory';

// type CheckboxIcon = 'checkbox_checked' | 'checkbox_unchecked' | 'checkbox_indeterminate';
// type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

// export type CheckboxProps = {
//   size?: Size;
//   weight?: FontWeight;
//   alignment?: Alignment;
//   disabled?: boolean;
//   readonly?: boolean;
//   state?: CheckboxState;
//   label?: string;
//   error?: string;
//   note?: string;
// };

// export type CheckboxFactory = Factory<{
//   props: CheckboxProps;
//   component: 'Checkbox';
// }>;

// const findCheckboxStateIcon = (state: CheckboxProps['state']): CheckboxIcon => {
//   if (!state) return 'checkbox_unchecked';
//   return `checkbox_${state}`;
// };

// export const Checkbox = factory<CheckboxFactory>((props, ref) => {
//   const {
//     size,
//     note,
//     label,
//     error,
//     state,
//     alignment,
//     className: defaultClassName,
//     component: Component = 'button',
//     ...otherProps
//   } = props;

//   const className = clsx(
//     'Checkbox',
//     {
//       [`Checkbox--${size}`]: size !== undefined,
//       [`Checkbox--${state}`]: state !== undefined,
//       [`Checkbox--${alignment}`]: alignment !== undefined,
//     },
//     defaultClassName
//   );

//   return (
//     <Component {...otherProps} ref={ref} className={className}>
//       <Icon name={findCheckboxStateIcon(state)} size={size} aria-label={label} />
//       <div>
//         {label && <Label>{label}</Label>}
//         {error && <Text>{error}</Text>}
//         {note && <Text>{note}</Text>}
//       </div>
//     </Component>
//   );
// });

// Checkbox.displayName = '@TBDX/Checkbox';
