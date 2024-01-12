import { createFactory, mergeProps, createModifierClasses } from '@/utils';
import { type TFactoryControlGroup } from '@/common/Control';

const defaultProps: Partial<TFactoryControlGroup['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
  orientation: 'vertical',
};

export const ControlGroup = createFactory<TFactoryControlGroup>((props, ref) => {
  const { className, children, size, align, scheme, orientation, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'ControlGroup',
    modifiers: mergeProps(defaultProps, { size, align, scheme, orientation }),
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

ControlGroup.displayName = '@/common/ControlGroup';
