import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryRadioGroup } from '@/common/Radio';

const defaultModifiers: Partial<TFactoryRadioGroup['props']> = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const RadioGroup = createFactory<TFactoryRadioGroup>((props, ref) => {
  const { size, align, children, className, orientation, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, orientation });
  const css = createThemeClasses({ base: 'RadioGroup', modifiers, className });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

RadioGroup.displayName = '@/common/Radio.Group';
