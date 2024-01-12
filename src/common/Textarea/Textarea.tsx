import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryTextarea } from '@/common/Textarea';
import { Icon } from '@/common/Icon';

const TextareaIcon: TFactoryTextarea['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultProps: Partial<TFactoryTextarea['props']> = {
  size: 'sm',
};

export const Textarea = createFactory<TFactoryTextarea>((props, ref) => {
  const { children, className, size, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Textarea',
    modifiers: mergeProps(defaultProps, { size }),
    className,
  });

  return <textarea ref={ref} {...otherProps} className={css} />;
});

TextareaIcon.displayName = '@/common/Textarea.Icon';
Textarea.displayName = '@/common/Textarea';
Textarea.Icon = TextareaIcon;
