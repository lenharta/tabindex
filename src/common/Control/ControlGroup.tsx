import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryControlGroup } from '@/common/Control';

const defaultModifiers: Partial<TFactoryControlGroup['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
  orientation: 'vertical',
};

export const ControlGroup = createFactory<TFactoryControlGroup>((props, ref) => {
  const { className, children, size, align, scheme, orientation, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, scheme, orientation });
  const css = createThemeClasses({ base: 'ControlGroup', modifiers, className });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

ControlGroup.displayName = '@/common/ControlGroup';
