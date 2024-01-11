import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryCheckboxGroup } from '@/common/Checkbox';

export const CheckboxGroup = factory<TFactoryCheckboxGroup>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    orientation = 'vertical',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'CheckboxGroup',
    modifiers: { size, align, orientation },
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

CheckboxGroup.displayName = '@/common/CheckboxGroup';
