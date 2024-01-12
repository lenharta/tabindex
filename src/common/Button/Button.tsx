import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryButton, UnstyledButton } from '@/common/Button';

const defaultModifiers: Partial<TFactoryButton['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
};

export const Button = createFactory<TFactoryButton>((props, ref) => {
  const { size, align, scheme, children, className, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, scheme });
  const css = createThemeClasses({ base: 'Button', modifiers, className });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

Button.displayName = '@/common/Button';
