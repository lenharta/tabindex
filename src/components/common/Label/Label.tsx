import clsx from 'clsx';
import { type TBDX } from '@/types';
import { createPolymorphicFactory, type CORE } from '@/components/factory';

export interface LabelProps {
  size?: TBDX.Alignment;
  align?: TBDX.Alignment;
  accent?: TBDX.Alignment;
}

export type LabelFactory = CORE.Factory<{
  ref: HTMLLabelElement;
  props: LabelProps;
  component: 'label';
}>;

export const Label = createPolymorphicFactory<LabelFactory>((props, ref) => {
  const { size, align, accent, children, className, ...otherProps } = props;

  const clxss = clsx(
    'tbdx-label',
    {
      [`tbdx-label--size-${size}`]: size,
      [`tbdx-label--align-${align}`]: align,
      [`tbdx-label--accent-${accent}`]: accent,
    },
    className
  );

  return (
    <label {...otherProps} className={clxss} ref={ref}>
      {children}
    </label>
  );
});
