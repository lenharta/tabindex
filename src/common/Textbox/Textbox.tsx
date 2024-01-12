import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryTextbox } from '@/common/Textbox';
import { Icon } from '@/common/Icon';

const TextboxIcon: TFactoryTextbox['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultModifiers: Partial<TFactoryTextbox['props']> = {
  size: 'md',
};

export const Textbox = createFactory<TFactoryTextbox>((props, ref) => {
  const { children, className, size, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size });
  const css = createThemeClasses({ base: 'Textbox', modifiers, className });

  return <input type="text" ref={ref} {...otherProps} className={css} />;
});

TextboxIcon.displayName = '@/common/Textbox.Icon';
Textbox.displayName = '@/common/Textbox';
Textbox.Icon = TextboxIcon;
