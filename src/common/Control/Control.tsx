import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryControl } from '@/common/Control';
import { UnstyledButton } from '@/common/Button';
import { Icon } from '@/common/Icon';

export const ControlIcon: TFactoryControl['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultModifiers: Partial<TFactoryControl['props']> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
};

export const Control = createFactory<TFactoryControl>((props, ref) => {
  const { children, className, size, align, scheme, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, scheme });
  const css = createThemeClasses({ base: 'Control', modifiers, className });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

ControlIcon.displayName = '@/common/Control.Icon';
Control.displayName = '@/common/Control';
Control.Icon = ControlIcon;
