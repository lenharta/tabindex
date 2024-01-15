import * as React from 'react';

// GLOBAL
export type TNoop = () => void;
export type TBoolish = boolean | 'true' | 'false';
export type TCodeLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

// THEME
export type TMode = 'light' | 'dark';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TFontStyle = 'normal' | 'italic';
export type TFontWeight = 'xlt' | 'lgt' | 'med' | 'reg' | 'bld' | 'xbd';

// DIMENSION & POSITION
export type TPosition = 'top' | 'right' | 'bottom' | 'left';
export type TAlignment = 'start' | 'center' | 'end';
export type TPlacement = TPosition | `${TPosition}-${TAlignment}`;
export type TDimension<T = number | string> = { height: T; width: T };
export type TCoordinate<T = number | string> = { x: T; y: T };

// ELEMENTS
export type THeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// UTILITIES
export type TMergeProps<P = {}, O = {}> = Omit<P, keyof O>;

export type TExtendedProps<P = object, O = object> = O & TMergeProps<P, O>;

export type TInheritedProps<P = object, O = object> = TExtendedProps<O, P>;

export type TLibraryManagedProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<Component, React.ComponentPropsWithoutRef<Component>>;

export type TLibraryManagedInheritedProps<
  C extends React.ElementType,
  P = object,
> = TInheritedProps<TLibraryManagedProps<C>, P>;

export type TPolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;
