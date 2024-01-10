import { factory, type Factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { Icon, type TIconKey } from '@/common/Icon';
import { InlineInput } from '@/common/InlineInput';

import {
  CheckboxGroup,
  type IPropsCheckbox,
  type TStateCheckbox,
  type TStateCheckboxVariant,
} from '@/common/Checkbox';

export type CheckboxFactory = Factory<{
  ref: HTMLButtonElement;
  props: IPropsCheckbox;
  components: {
    Group: typeof CheckboxGroup;
  };
}>;

const nextState: Record<TStateCheckbox, TStateCheckbox> = {
  true: 'false',
  false: 'true',
  mixed: 'false',
};

const variantState: Record<TStateCheckbox, TStateCheckboxVariant> = {
  true: 'checked',
  false: 'unchecked',
  mixed: 'indeterminate',
};

const checkboxIconLookup: Record<string, TIconKey> = {
  'filled-checked': 'square-check-fill',
  'filled-unchecked': 'square-fill',
  'filled-indeterminate': 'square-dash-fill',
  'outlined-checked': 'square-check',
  'outlined-unchecked': 'square',
  'outlined-indeterminate': 'square-dash',
};

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    id,
    size = 'md',
    label,
    checked,
    variant = 'filled',
    alignment = 'start',
    onChange,
    onKeyDown,
    isDisabled,
    isReadonly,
    ...otherProps
  } = props;

  const ariaProps = {
    'aria-checked': checked,
  };

  const className = createModifierClasses({
    base: 'Checkbox',
    modifiers: { variant, size, alignment, state: variantState[checked] },
  });

  return (
    <InlineInput
      {...otherProps}
      {...ariaProps}
      id={id}
      ref={ref}
      label={label}
      className={className}
      isReadonly={isReadonly}
      isDisabled={isDisabled}
      onDoubleClick={() => onChange('mixed')}
      onClick={() => onChange(nextState[checked])}
      onKeyDown={(event) => {
        onKeyDown?.(event);

        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          event.stopPropagation();
          return checked === 'mixed' ? onChange('false') : onChange('mixed');
        }
        if (event.key === 'Enter' && !(event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          event.stopPropagation();
          onChange(nextState[checked]);
        }
      }}
    >
      <Icon
        className="Checkbox-indicator"
        name={checkboxIconLookup[`${variant}-${variantState[checked]}`]}
      />
    </InlineInput>
  );
});

Checkbox.Group = CheckboxGroup;
