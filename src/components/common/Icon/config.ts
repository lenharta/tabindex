export type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  size?: number | string;
};

export type IconKey =
  | 'checkbox_checked_filled'
  | 'checkbox_checked_outlined'
  | 'checkbox_unchecked_filled'
  | 'checkbox_unchecked_outlined'
  | 'checkbox_indeterminate_filled'
  | 'checkbox_indeterminate_outlined';

export type IconComponentProps = { size?: 'sm' | 'md' | 'lg'; name?: IconKey };

export type IconComponent = (props: IconComponentProps & IconProps) => JSX.Element;
