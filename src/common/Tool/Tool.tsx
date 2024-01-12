import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryTool } from '@/common/Tool';
import { UnstyledButton } from '@/common/Button';
import { Icon } from '@/common/Icon';

const ToolIcon: TFactoryTool['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultModifiers: Partial<TFactoryTool['props']> = {
  size: 'sm',
  align: 'center',
};

export const Tool = createFactory<TFactoryTool>((props, ref) => {
  const { children, className, size, align, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align });
  const css = createThemeClasses({ base: 'Tool', modifiers, className });

  return (
    <UnstyledButton ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledButton>
  );
});

ToolIcon.displayName = '@/common/Tool.Icon';
Tool.displayName = '@/common/Tool';
Tool.Icon = ToolIcon;
