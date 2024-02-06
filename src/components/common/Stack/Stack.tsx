import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createPolymorphicFactory } from '@/components/factory';

export interface StackProps {
  gap?: TBDX.Size;
  align?: TBDX.Alignment;
  justify?: TBDX.Justify;
}

export type StackFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: StackProps;
  component: 'div';
}>;

export const Stack = createPolymorphicFactory<StackFactory>((props, ref) => {
  const {
    gap,
    align,
    justify,
    className,
    component: Component = 'div',
    children,
    ...otherProps
  } = props;

  const clxss = clsx(
    'tbdx-stack',
    {
      [`tbdx-stack--gap-${gap}`]: gap,
      [`tbdx-stack--align-${align}`]: align,
      [`tbdx-stack--justify-${justify}`]: justify,
    },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
