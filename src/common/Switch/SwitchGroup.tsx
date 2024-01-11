import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactorySwitchGroup } from '@/common/Switch';

export const SwitchGroup = factory<TFactorySwitchGroup>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    orientation = 'vertical',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'SwitchGroup',
    modifiers: { size, align, orientation },
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

SwitchGroup.displayName = '@/common/Switch.Group';
