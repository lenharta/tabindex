import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryTextarea } from '@/common/Textarea/types';
import { Icon } from '@/common/Icon';

const TextareaIcon: TFactoryTextarea['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const Textarea = factory<TFactoryTextarea>((props, ref) => {
  const { children, className, size, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Textarea',
    modifiers: { size },
    className,
  });

  return <textarea ref={ref} {...otherProps} className={css} />;
});

TextareaIcon.displayName = '@/common/Textarea.Icon';
Textarea.displayName = '@/common/Textarea';

Textarea.Icon = TextareaIcon;
