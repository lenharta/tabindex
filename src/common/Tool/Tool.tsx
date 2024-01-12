import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryTool } from '@/common/Tool';
import { UnstyledButton } from '@/common/Button';
import { Icon } from '@/common/Icon';

const ToolIcon: TFactoryTool['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultProps: Partial<TFactoryTool['props']> = {
  size: 'sm',
  align: 'center',
};

export const Tool = createFactory<TFactoryTool>((props, ref) => {
  const { children, className, size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Tool',
    modifiers: mergeProps(defaultProps, { size }),
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
