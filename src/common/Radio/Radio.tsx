import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryRadio } from '@/common/Radio';
import { InlineInput } from '@/common/InlineInput';

export const Radio = factory<TFactoryRadio>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Radio',
    modifiers: { size, align },
    className,
  });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Radio.displayName = '@/common/Radio';
