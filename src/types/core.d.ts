import * as React from 'react';

export declare namespace Core {
  export type CSS = React.CSSProperties;

  export type Element = React.ElementType;

  export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

  export type Dispatch<T> = React.Dispatch<T>;

  export type StateDispatch<T> = React.Dispatch<React.SetStateAction<T>>;

  export type StateReturn<T> = [T, StateDispatch<T>];

  export type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

  export type ProviderProps = Readonly<{ children?: React.ReactNode | undefined }>;

  export type Provider = (props: ProviderProps) => React.ReactNode;

  export type ProviderWithValue = (props: ProviderProps & { value: T }) => React.ReactNode;

  export type OverwriteProps<T, P> = T & { [K in keyof P]: K extends keyof T ? T[K] : never };

  export type FilterProps<T, U> = U extends keyof T ? Omit<T, U> : T;

  // export type MergeProps<T, P, U> = Filter<Overwrite<T, P>, U>;
}
