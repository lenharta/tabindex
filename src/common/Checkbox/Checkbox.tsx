import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryCheckbox } from '@/common/Checkbox';
import { InlineInput } from '@/common/InlineInput';

export const Checkbox = factory<TFactoryCheckbox>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Checkbox',
    modifiers: { size, align },
    className,
  });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Checkbox.displayName = '@/common/Checkbox';
