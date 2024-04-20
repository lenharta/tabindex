export declare namespace TBDX {
  export type BaseProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

  export type Orientation = 'horizontal' | 'vertical';

  export type Size3 = 'sm' | 'md' | 'lg';
  export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type FontSize = Size7;
  export type FontFamily = 'plex' | 'plex-c';
  export type FontWeight = 'thn' | 'xlt' | 'lgt' | 'reg' | 'med' | 'sbd' | 'bld';

  export type FontSizeToken = `fz-${FontSize}`;
  export type FontFamilyToken = `ff-${FontFamily}`;
  export type FontWeightToken = `fw-${FontWeight}`;

  export interface TextProps {
    fz?: FontSize | undefined;
    ff?: FontFamily | undefined;
    fw?: FontWeight | undefined;
    theme?: 'default' | 'accent' | undefined;
    variant?: 'default' | 'outlined' | undefined;
  }

  export interface TitleProps {
    fz?: FontSize | undefined;
    ff?: FontFamily | undefined;
    fw?: FontWeight | undefined;
    theme?: 'default' | 'accent' | undefined;
    variant?: 'default' | 'outlined' | undefined;
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
  }

  export type ButtonTheme = 'default' | 'tertiary' | 'accented';
  export type ButtonVariant = 'default' | 'ghost' | 'outlined';

  export interface ButtonProps extends BaseProps<'button'> {
    size?: Size5 | undefined;
    theme?: ButtonTheme | undefined;
    variant?: ButtonVariant | undefined;
  }

  export interface ButtonGroupProps extends BaseProps<'div'> {
    size?: Size5 | undefined;
    theme?: ButtonTheme | undefined;
    variant?: ButtonVariant | undefined;
    orientation?: Orientation | undefined;
  }
}
