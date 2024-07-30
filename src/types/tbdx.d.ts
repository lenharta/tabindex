import React from 'react';
import { Core } from './core';

export declare namespace TBDX {
  export type Dir = 'ltr' | 'rtl';

  export type Mode = 'light' | 'dark';

  export type Side = 'top' | 'right' | 'bottom' | 'left';

  export type Length = 'height' | 'width';

  export type Position = 'start' | 'center' | 'end';

  export type Placement = Side | `${Side}-${Position}`;

  export type Orientation = 'horizontal' | 'vertical';

  export type Size3 = 'sm' | 'md' | 'lg';

  export type Size4 = 'xs' | 'sm' | 'md' | 'lg';

  export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export type Size6 = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type Size8 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

  export type ElementProp<U> = Partial<{ as: U }>;

  export type ElementProps<T> = Partial<React.ComponentPropsWithoutRef<T>>;

  export type MarginProps = {
    /** Defines theme styles for the `margin-inline` property. */
    mx: Size8 | 'auto';
    /** Defines theme styles for the `margin-block` property. */
    my: Size8 | 'auto';
    /** Defines theme styles for the `margin-top` property. */
    mt: Size8 | 'auto';
    /** Defines theme styles for the `margin-right` property. */
    mr: Size8 | 'auto';
    /** Defines theme styles for the `margin-bottom` property. */
    mb: Size8 | 'auto';
    /** Defines theme styles for the `margin-left` property. */
    ml: Size8 | 'auto';
  };

  export type PaddingProps = {
    /** Defines theme styles for the `padding-inline` property. */
    px: Size8 | 'auto';
    /** Defines theme styles for the `padding-block` property. */
    py: Size8 | 'auto';
    /** Defines theme styles for the `padding-top` property. */
    pt: Size8 | 'auto';
    /** Defines theme styles for the `padding-right` property. */
    pr: Size8 | 'auto';
    /** Defines theme styles for the `padding-bottom` property. */
    pb: Size8 | 'auto';
    /** Defines theme styles for the `padding-left` property. */
    pl: Size8 | 'auto';
  };

  export type FontProps = {
    /** Specifies theme styles for the `color` properties alpha value. */
    fe: 'min' | 'low' | 'med' | 'max';
    /** Specifies theme styles for the `font-family` property. */
    ff: 'plex' | 'plex-c';
    /** Specifies theme styles for the `font-weight` property. */
    fw: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd' | 'blk';
    /** Specifies theme styles for the `font-size` property. */
    fz: Size5;
  };

  export type RootProps = PaddingProps & MarginProps;
  export type BaseProps<P> = P & RootProps;

  export type ThemeProps = {
    Text: BaseProps<FontProps>;
    Title: BaseProps<FontProps>;
    Label: BaseProps<FontProps>;
    Radio: BaseProps;
    Switch: BaseProps;
    Checkbox: BaseProps;
    Snippet: BaseProps<FontProps>;
  };

  type FactoryPayload = {
    name: keyof ThemeProps;
    comp: React.ElementType;
    comps: React.ElementType;
    omits?: any | undefined;
    props?: Record<string, any> | undefined;
  };

  type FactoryProps<P extends FactoryPayload> = Partial<
    ThemeProps[P['name']] & ElementProps<P['comp']> & ElementProp<P['comps']>
  >;

  type Factory<P extends FactoryPayload> = Core.FilterProps<
    Core.OverwriteProps<FactoryProps<P>, P['props']>,
    P['omits']
  >;

  export type TextProps = Factory<{
    name: 'Text';
    comp: 'p';
    comps: 'p' | 'span';
    props: {};
  }>;

  export type TitleProps = Factory<{
    name: 'Title';
    comp: 'h2';
    comps: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    props: {};
  }>;
}
