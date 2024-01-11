import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryControl } from '@/common/Control';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { Icon } from '@/common/Icon';

export const ControlIcon: TFactoryControl['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Control = factory<TFactoryControl>((props, ref) => {
  const { children, className, size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Control',
    modifiers: { size },
    className,
  });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

ControlIcon.displayName = '@/common/Control.Icon';
Control.displayName = '@/common/Control';

Control.Icon = ControlIcon;
