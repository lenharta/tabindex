import { type TFactorySwitchGroup } from '@/common/Switch';
import { createFactory, createModifierClasses, mergeProps } from '@/utils';

const defaultProps: Partial<TFactorySwitchGroup['props']> = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const SwitchGroup = createFactory<TFactorySwitchGroup>((props, ref) => {
  const { size, align, children, className, orientation, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'SwitchGroup',
    modifiers: mergeProps(defaultProps, { size, align, orientation }),
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

SwitchGroup.displayName = '@/common/Switch.Group';
