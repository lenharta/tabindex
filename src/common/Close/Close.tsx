import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryClose } from '@/common/Close';
import { UnstyledButton } from '@/common/Button';
import { Icon } from '@/common/Icon';

const CloseIcon: TFactoryClose['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultModifiers: Partial<TFactoryClose['props']> = {
  size: 'sm',
};

export const Close = createFactory<TFactoryClose>((props, ref) => {
  const { children, className, size, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size });
  const css = createThemeClasses({ base: 'Close', modifiers, className });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

CloseIcon.displayName = '@/common/Close.Icon';
Close.displayName = '@/common/Close';
Close.Icon = CloseIcon;
