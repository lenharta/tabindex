import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryCheckbox } from '@/common/Checkbox';
import { InlineInput } from '@/common/InlineInput';

export const LOOKUP_CHECKBOX_ICON = {
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

const defaultModifiers: Partial<TFactoryCheckbox['props']> = {
  size: 'sm',
  align: 'start',
};

export const Checkbox = createFactory<TFactoryCheckbox>((props, ref) => {
  const { children, className, size, align, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align });
  const css = createThemeClasses({ base: 'Checkbox', modifiers, className });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Checkbox.displayName = '@/common/Checkbox';
