import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryButtonGroup } from './Button.types';

const defaultModifiers: Partial<TFactoryButtonGroup['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
  orientation: 'vertical',
};

export const ButtonGroup = createFactory<TFactoryButtonGroup>((props, ref) => {
  const { size, align, scheme, children, className, orientation, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, scheme, orientation });
  const css = createThemeClasses({ base: 'ButtonGroup', modifiers, className });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});

ButtonGroup.displayName = '@/common/ButtonGroup';
