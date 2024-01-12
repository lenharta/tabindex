import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryRadio } from '@/common/Radio';
import { InlineInput } from '@/common/InlineInput';

const defaultModifiers: Partial<TFactoryRadio['props']> = {
  align: 'start',
  size: 'sm',
};

export const Radio = createFactory<TFactoryRadio>((props, ref) => {
  const { children, className, size, align, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align });
  const css = createThemeClasses({ base: 'Radio', modifiers, className });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Radio.displayName = '@/common/Radio';
