import * as React from 'react';
import { Page } from '@/app/layouts';

type MergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;

type FilterProps<P, U> = Pick<P, Exclude<keyof P, U>>;

type FactoryAttributes<E extends keyof JSX.IntrinsicElements> =
  E extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[E] : {};

type FactoryPropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? FilterProps<P, 'ref'>
    : P
  : P;

type FactoryMergedProps<E extends keyof JSX.IntrinsicElements, P = {}> = MergeProps<
  FactoryPropsWithoutRef<FactoryAttributes<E>>,
  React.ComponentProps<E> & P & { component?: any }
>;

type FactoryElement<E extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
  [K in E]: K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : never;
}[E];

type FactoryComponentFunction<E extends keyof JSX.IntrinsicElements, P = {}> = (
  props: FactoryMergedProps<E, P>,
  ref: React.ForwardedRef<FactoryElement<E>>
) => React.ReactElement;

const createPolymorphicComponent = <E extends keyof JSX.IntrinsicElements, P = {}>(
  ui: FactoryComponentFunction<E, P>
) => {
  type ComponentType = React.ForwardRefExoticComponent<FactoryMergedProps<E, P>>;
  const Component = React.forwardRef(ui) as unknown as ComponentType;
  return Component as ComponentType;
};

type TButtonElements = 'button' | 'a';

interface IButtonProps {
  scheme?: 'default' | 'secondary' | 'action';
  variant?: 'outline' | 'tonal' | 'outline-tonal' | 'ghost';
}

const Button = createPolymorphicComponent<TButtonElements, IButtonProps>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Button component="a">Button</Button>
      </Page.Content>
    </Page>
  );
};
