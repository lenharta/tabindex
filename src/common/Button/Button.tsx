import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryButton } from '@/common/Button/types';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { Icon } from '@/common/Icon';

const ButtonIcon: TFactoryButton['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Button = factory<TFactoryButton>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    scheme = 'default',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'Button',
    modifiers: { size, align, scheme },
    className,
  });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

Button.displayName = '@/common/Button';
Button.Icon = ButtonIcon;
