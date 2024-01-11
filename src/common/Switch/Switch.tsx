import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactorySwitch } from '@/common/Switch';
import { InlineInput } from '@/common/InlineInput';

export const Switch = factory<TFactorySwitch>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Switch',
    modifiers: { size, align },
    className,
  });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Switch.displayName = '@/common/Switch';
