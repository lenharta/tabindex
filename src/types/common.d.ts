export declare namespace TBDX {
  export type BaseProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

  export type Align = 'start' | 'center' | 'end';
  export type Justify = 'start' | 'center' | 'end';
  export type Orientation = 'horizontal' | 'vertical';

  export type Size3 = 'sm' | 'md' | 'lg';
  export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type FontFamily = 'plex' | 'plex-c';
  export type FontWeight = 'thn' | 'xlt' | 'lgt' | 'reg' | 'med' | 'sbd' | 'bld';

  export type FontSizeToken = `fz-${FontSize}`;
  export type FontFamilyToken = `ff-${FontFamily}`;
  export type FontWeightToken = `fw-${FontWeight}`;

  export interface TextProps {
    fz?: number | undefined;
    ff?: FontFamily | undefined;
    fw?: FontWeight | undefined;
    block?: boolean | undefined;
    theme?: 'default' | 'accent' | undefined;
    clamp?: boolean | undefined;
    inline?: boolean | undefined;
    inherit?: boolean | undefined;
    variant?: 'default' | 'outlined' | 'gradient' | undefined;
    truncate?: Omit<Align, 'center'> | undefined;
  }

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export type TitleElementProps = { [Key in TitleElement]?: boolean | undefined };

  export interface TitleProps extends TitleElementProps {
    fz?: number | undefined;
    ff?: FontFamily | undefined;
    fw?: FontWeight | undefined;
    clamp?: boolean | undefined;
    theme?: 'default' | 'accent' | undefined;
    variant?: 'default' | 'outlined' | 'gradient' | undefined;
    component?: TitleElement | undefined;
  }

  export type ButtonTheme = 'default' | 'accent';
  export type ButtonVariant = 'default' | 'ghost' | 'outlined';

  export interface ButtonProps extends BaseProps<'button'> {
    size?: Size5 | undefined;
    block?: boolean | undefined;
    theme?: ButtonTheme | undefined;
    variant?: ButtonVariant | undefined;
  }

  export interface ButtonGroupProps extends BaseProps<'div'> {
    size?: Size5 | undefined;
    block?: boolean | undefined;
    theme?: ButtonTheme | undefined;
    variant?: ButtonVariant | undefined;
    orientation?: Orientation | undefined;
  }

  export interface ButtonGroupContext {
    size?: Size5 | undefined;
    block?: boolean | undefined;
    theme?: ButtonTheme | undefined;
    variant?: ButtonVariant | undefined;
  }
}
