import { createFactory, createModifierClasses } from '@/utils';
import { type TFactoryClose } from '@/common/Close';
import { UnstyledButton } from '@/common/Button';
import { Icon } from '@/common/Icon';

const CloseIcon: TFactoryClose['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Close = createFactory<TFactoryClose>((props, ref) => {
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

CloseIcon.displayName = '@/common/Close.Icon';
Close.displayName = '@/common/Close';
Close.Icon = CloseIcon;
