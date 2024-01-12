import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryCheckboxGroup } from '@/common/Checkbox';

const defaultModifiers: Partial<TFactoryCheckboxGroup['props']> = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const CheckboxGroup = createFactory<TFactoryCheckboxGroup>((props, ref) => {
  const { size, align, children, className, orientation, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, orientation });
  const css = createThemeClasses({ base: 'CheckboxGroup', modifiers, className });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

CheckboxGroup.displayName = '@/common/CheckboxGroup';
