import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryButton, UnstyledButton } from '@/common/Button';

const defaultProps: Partial<TFactoryButton['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
};

export const Button = createFactory<TFactoryButton>((props, ref) => {
  const { size, align, scheme, children, className, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Button',
    modifiers: mergeProps(defaultProps, { size, align, scheme }),
    className,
  });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

Button.displayName = '@/common/Button';
