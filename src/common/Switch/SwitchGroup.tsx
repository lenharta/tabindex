import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactorySwitchGroup } from '@/common/Switch';

const defaultModifiers: Partial<TFactorySwitchGroup['props']> = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const SwitchGroup = createFactory<TFactorySwitchGroup>((props, ref) => {
  const { size, align, children, className, orientation, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, orientation });
  const css = createThemeClasses({ base: 'SwitchGroup', modifiers, className });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

SwitchGroup.displayName = '@/common/Switch.Group';
