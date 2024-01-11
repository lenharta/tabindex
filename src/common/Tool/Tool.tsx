import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryTool } from '@/common/Tool';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { Icon } from '@/common/Icon';

const ToolIcon: TFactoryTool['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Tool = factory<TFactoryTool>((props, ref) => {
  const { children, className, size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Tool',
    modifiers: { size },
    className,
  });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

ToolIcon.displayName = '@/common/Tool.Icon';
Tool.displayName = '@/common/Tool';

Tool.Icon = ToolIcon;
