import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryRadio } from '@/common/Radio';
import { InlineInput } from '@/common/InlineInput';

const defaultModifiers: Partial<TFactoryRadio['props']> = {
  align: 'start',
  size: 'sm',
};

export const Radio = createFactory<TFactoryRadio>((props, ref) => {
  const { id, children, className, size, align, label, infoText, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Radio',
    modifiers: mergeProps(defaultModifiers, { size, align }),
    className,
  });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Radio.displayName = '@/common/Radio';
