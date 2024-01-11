import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryInlineInput } from '@/common/InlineInput';
import { Icon } from '@/common/Icon';

const InlineInputIcon: TFactoryInlineInput['components']['Icon'] = (props) => {
  const { name, ...otherProps } = props;
  return name ? <Icon name={name} {...otherProps} /> : null;
};

export const InlineInput = factory<TFactoryInlineInput>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'InlineInput',
    modifiers: { size, align },
    className,
  });

  return (
    <button ref={ref} {...otherProps} className={css}>
      {children}
    </button>
  );
});

InlineInput.displayName = '@/common/InlineInput';
InlineInput.Icon = InlineInputIcon;
