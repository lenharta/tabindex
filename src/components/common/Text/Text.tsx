import clsx from 'clsx';
import { type TBDX } from '@/types';
import { CORE, createPolymorphic } from '@/components/factory';

export interface TextProps {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  variant?: 'filled' | 'outlined' | 'gradient';
  align?: 'start' | 'center' | 'end';
  strong?: boolean;
  span?: boolean;
}

export type TextFactory = CORE.Factory<{
  ref: HTMLParagraphElement;
  props: TextProps;
  component: 'p';
}>;

export const Text = createPolymorphic<TextFactory>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    accent,
    variant = 'filled',
    children,
    className,
    component: Component = 'p',
    ...otherProps
  } = props;

  const clxss = clsx(
    `tbdx-text`,
    {
      [`tbdx-text--size-${size}`]: size,
      [`tbdx-text--align-${align}`]: align,
      [`tbdx-text--accent-${accent}`]: accent,
      [`tbdx-text--variant-${variant}`]: variant,
    },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
