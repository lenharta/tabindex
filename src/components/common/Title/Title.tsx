import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createPolymorphicFactory } from '@/components/factory';

export type TitleProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  variant?: 'filled' | 'outlined' | 'gradient';
};

export type TitleFactory = CORE.Factory<{
  ref: HTMLHeadingElement;
  props: TitleProps;
  component: 'h3';
}>;

export const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    size,
    align = 'start',
    accent,
    variant = 'filled',
    children,
    className,
    component: Component = 'h3',
    ...otherProps
  } = props;

  const clxss = clsx(
    'tbdx-title',
    {
      [`tbdx-title--size-${size}`]: size,
      [`tbdx-title--align-${align}`]: align,
      [`tbdx-title--accent-${accent}`]: accent,
      [`tbdx-title--variant-${variant}`]: variant,
    },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
