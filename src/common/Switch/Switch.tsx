import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactorySwitch } from '@/common/Switch';
import { InlineInput } from '@/common/InlineInput';

const defaultModifiers: TFactorySwitch['props'] = {
  size: 'sm',
  align: 'start',
};

export const Switch = createFactory<TFactorySwitch>((props, ref) => {
  const { children, className, size, align, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align });
  const css = createThemeClasses({ base: 'Switch', modifiers, className });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Switch.displayName = '@/common/Switch';
