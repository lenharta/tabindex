import * as React from 'react';

type Override<T = {}, U = {}> = U & Omit<U, keyof T>;

// type BaseProps<E> = E extends React.ElementType ? React.ComponentPropsWithoutRef<E>;

// type CoreProps<E, P = {}> = E extends React.ElementType
//   ? Override<P, BaseProps<E>> & { component?: E }
//   : never;

// type CoreRef<E> = E extends React.ElementType
//   ? { ref?: React.ComponentPropsWithRef<E>['ref'] }
//   : never;

// type CorePropsWithRef<E> = CoreProps<E> & CoreRef<E>;

// type CoreRenderFunction<E extends React.ElementType> = (
//   props: CorePropsWithRef<E>,
//   ref?: React.ForwardedRef<E>
// ) => React.ReactNode;

const Btn: CoreRenderFunction<'button'> = (props, ref) => {
  const {} = props;
};
