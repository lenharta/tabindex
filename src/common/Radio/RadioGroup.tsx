import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryRadioGroup } from '@/common/Radio';

export const RadioGroup = factory<TFactoryRadioGroup>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    orientation = 'vertical',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'RadioGroup',
    modifiers: { size, align, orientation },
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

RadioGroup.displayName = '@/common/Radio.Group';
