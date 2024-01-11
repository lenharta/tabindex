import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryTextbox } from '@/common/Textbox/types';
import { Icon } from '@/common/Icon';

const TextboxIcon: TFactoryTextbox['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Textbox = factory<TFactoryTextbox>((props, ref) => {
  const { children, className, size, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Textbox',
    modifiers: { size },
    className,
  });

  return <input type="text" ref={ref} {...otherProps} className={css} />;
});

Textbox.displayName = '@/common/Textbox';
Textbox.Icon = TextboxIcon;
