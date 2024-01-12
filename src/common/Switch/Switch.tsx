import { createFactory, mergeProps, createModifierClasses } from '@/utils';
import { type TFactorySwitch } from '@/common/Switch';
import { InlineInput } from '@/common/InlineInput';

const defaultProps: TFactorySwitch['props'] = {
  size: 'sm',
  align: 'start',
};

export const Switch = createFactory<TFactorySwitch>((props, ref) => {
  const { children, className, align, size, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Switch',
    modifiers: mergeProps(defaultProps, { size, align }),
    className,
  });

  return (
    <InlineInput ref={ref} {...otherProps} className={css}>
      {children}
    </InlineInput>
  );
});

Switch.displayName = '@/common/Switch';
