import * as React from 'react';
import { Page } from '@/components/layouts';
import { IconGallery } from '@/components/common/Icon';

type ComponentRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
type ComponentRefProp<C extends React.ElementType> = { ref?: ComponentRef<C> };
type ComponentPropsWithoutRef<C extends React.ElementType> = React.ComponentPropsWithoutRef<C>;

type FactoryProps<C extends React.ElementType> = ComponentPropsWithoutRef<C> & { component?: C };
type FactoryInputProps<C extends React.ElementType> = FactoryProps<C> & ComponentRefProp<C>;
type FactoryInputRef<C extends React.ElementType> = React.ForwardedRef<ComponentRef<C>>;

type FactoryInput<C extends React.ElementType> = (
  props: FactoryInputProps<C>,
  ref: FactoryInputRef<C>
) => React.ReactNode;

export const Box: <C extends React.ElementType>(
  props: FactoryInputProps<C>,
  ref: FactoryInputRef<C>
) => React.ReactNode = React.forwardRef(
  <C extends React.ElementType>(props: FactoryProps<C>, ref: FactoryInputRef<C>) => {
    const { component, ...otherProps } = props;
    const Component = component || 'div';
    return <Component {...otherProps} ref={ref} />;
  }
);

type ButtonProps = {
  disabled?: boolean;
  readonly?: boolean;
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

const Button: <C extends React.ElementType>(
  props: FactoryInputProps<C> & ButtonProps,
  ref: FactoryInputRef<C>
) => React.ReactNode = React.forwardRef(
  <C extends React.ElementType>(props: FactoryProps<C>, ref: FactoryInputRef<C>) => {
    const { component, children, disabled, readonly, ...otherProps } = props;
    const Component = component || 'button';

    const dataProps = {
      'data-disabled': disabled,
      'data-readonly': readonly,
    };

    const ariaProps = {
      'aria-disabled': disabled,
      'aria-readonly': readonly,
    };

    return (
      <Component {...otherProps} {...dataProps} {...ariaProps} ref={ref}>
        {children}
      </Component>
    );
  }
);

const TestComponent: <C extends React.ElementType = 'div'>(
  props: React.ComponentPropsWithoutRef<C> & { component?: C } & {
    ref?: React.ComponentPropsWithRef<C>['ref'];
  },
  ref: React.ForwardedRef<React.ComponentPropsWithRef<C>['ref']>
) => React.ReactNode = React.forwardRef(
  <C extends React.ElementType>(
    props: React.ComponentPropsWithoutRef<C> & { component?: C },
    ref: React.ForwardedRef<React.ComponentPropsWithRef<C>['ref']>
  ) => {
    const { component, ...otherProps } = props;
    const Component = component || 'div';
    return <Component {...otherProps} ref={ref} />;
  }
);

export default function Toolbox() {
  const ButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    ButtonRef.current?.focus();
  }, []);

  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Toolbox" />
      <Page.Content>
        <IconGallery />
        <TestComponent component="button">Test Component</TestComponent>
        <Button ref={ButtonRef}>Button (default)</Button>
        <Button component="a">Button (anchor)</Button>
      </Page.Content>
    </Page>
  );
}
