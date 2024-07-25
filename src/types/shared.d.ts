export declare namespace TabIndex {
  export type ElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

  export type Align = 'start' | 'center' | 'end';
  export type Justify = 'start' | 'center' | 'end';
  export type Orientation = 'horizontal' | 'vertical';

  export type Size3 = 'sm' | 'md' | 'lg';
  export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type FontFamily = 'plex' | 'plex-c';
  export type FontWeight = 'thn' | 'xlt' | 'lgt' | 'reg' | 'med' | 'sbd' | 'bld';

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export type TitleElementProps = { [Key in TitleElement]?: boolean | undefined };
}
