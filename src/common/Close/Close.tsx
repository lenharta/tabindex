import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryClose } from '@/common/Close';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { Icon } from '@/common/Icon';

const CloseIcon: TFactoryClose['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Close = factory<TFactoryClose>((props, ref) => {
  const { children, className, size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Close',
    modifiers: { size },
    className,
  });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

Close.Icon = CloseIcon;
