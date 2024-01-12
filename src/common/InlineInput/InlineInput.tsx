import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryInlineInput } from '@/common/InlineInput';
import { Icon } from '@/common/Icon';

const InlineInputIcon: TFactoryInlineInput['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

const defaultModifiers: Partial<TFactoryInlineInput['props']> = {
  align: 'start',
  size: 'sm',
};

export const InlineInput = createFactory<TFactoryInlineInput>((props, ref) => {
  const { id, children, className, size, align, label, infoText, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align });
  const css = createThemeClasses({ base: 'InlineInput', modifiers, className });

  return (
    <button ref={ref} {...otherProps} id={id} className={css}>
      {children}
      <div className="InlineInput-content">
        {label && <label htmlFor={id}>{label}</label>}
        {infoText && <p>{infoText}</p>}
      </div>
    </button>
  );
});

InlineInputIcon.displayName = '@/common/InlineInput.Icon';
InlineInput.displayName = '@/common/InlineInput';
InlineInput.Icon = InlineInputIcon;
