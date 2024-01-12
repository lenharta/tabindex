import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryButtonGroup } from '@/common/Button';

const defaultProps: Partial<TFactoryButtonGroup['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
  orientation: 'vertical',
};

export const ButtonGroup = createFactory<TFactoryButtonGroup>((props, ref) => {
  const { size, align, scheme, children, className, orientation, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'ButtonGroup',
    modifiers: mergeProps(defaultProps, { size, align, scheme, orientation }),
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

ButtonGroup.displayName = '@/common/ButtonGroup';
