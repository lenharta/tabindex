import { createFactory, mergeProps, createModifierClasses } from '@/utils';
import { type TFactoryRadioGroup } from '@/common/Radio';

const defaultProps: Partial<TFactoryRadioGroup['props']> = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const RadioGroup = createFactory<TFactoryRadioGroup>((props, ref) => {
  const { size, align, children, className, orientation, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'RadioGroup',
    modifiers: mergeProps(defaultProps, { size, align, orientation }),
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

RadioGroup.displayName = '@/common/Radio.Group';
