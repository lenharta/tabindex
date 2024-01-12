import { createFactory, createModifierClasses } from '@/utils';
import { type TFactoryCheckbox } from '@/common/Checkbox';
import { InlineInput } from '@/common/InlineInput';

const CHECKBOX_ICONS = {
  default: {
    true: 'square_check_fill',
    false: 'square_fill',
    mixed: 'square_dash_fill',
  },
  outlined: {
    true: 'square_check',
    false: 'square',
    mixed: 'square_dash',
  },
};

export const Checkbox = createFactory<TFactoryCheckbox>((props, ref) => {
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
