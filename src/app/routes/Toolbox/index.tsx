import { Page } from '@/app/components';
import { Icon, IconKey } from '@/components/common/Icon';
import { createRandomId } from '@/utils';
import clsx from 'clsx';
import React, { ForwardedRef } from 'react';

// type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

// type CheckboxOption = {
//   value: string;
//   label?: string;
//   state?: CheckboxState;
// };

// type CheckboxGroupProps = {
//   options: CheckboxOption[];
//   value: Record<string, CheckboxState>;
// };

// type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';
// type CheckboxState<T extends string = string> = Record<T, CheckboxState>;

const CHECKBOX_GROUP_DEFAULT_STATE = {
  math_205: 'checked',
  english_210: 'unchecked',
  history_204: 'indeterminate',
  physics_220: 'checked',
  compsci_230: 'unchecked',
};

const CHECKBOX_TEST_DATA: CheckboxOption[] = [
  { value: 'math_205', label: 'Math 205' },
  { value: 'english_210', label: 'English 210', state: 'checked' },
  { value: 'history_204', label: 'History 204', state: 'indeterminate' },
  { value: 'physics_220', label: 'Physics 220' },
  { value: 'compsci_230', label: 'Computer Science 230', state: 'checked' },
];

const CHECKBOX_ICON_KEYS: Record<CheckboxState, IconKey> = {
  checked: 'checkbox_checked_filled',
  unchecked: 'checkbox_unchecked_filled',
  indeterminate: 'checkbox_indeterminate_filled',
};

const CheckboxIcon = (props: CheckboxIconProps) => {
  const { state = 'unchecked' } = props;
  return <Icon name={CHECKBOX_ICON_KEYS[state]} />;
};

type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

type CheckboxOption = {
  value: string;
  state?: CheckboxState;
  label?: string;
  error?: string;
  note?: string;
};

const parseCheckboxOption = (option: CheckboxOption): CheckboxOption => {
  const hasLabel = 'label' in option;
  const hasState = 'state' in option;

  if (!hasLabel && !hasState) {
    return { ...option, label: option.value, state: 'unchecked' };
  }
  if (!hasState) {
    return { ...option, state: 'unchecked' };
  }
  if (!hasLabel) {
    return { ...option, label: option.value };
  }
  return option;
};

const parseCheckboxOptionData = (data?: CheckboxOption[]): CheckboxOption[] => {
  if (!data) return [];
  return data.map((option) => parseCheckboxOption(option));
};

type CheckboxIconProps = { state?: CheckboxState };

interface CheckboxProps extends React.ComponentPropsWithoutRef<'button'> {
  id?: string;
  uid: string;
  option: CheckboxOption;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'default' | 'secondary' | 'action';
  variant?: 'filled' | 'outlined';
  alignment?: 'start' | 'center' | 'end';
}

function createInputIds<T extends string = string>(
  uid: string,
  id?: string,
  keys?: T[]
): Record<T, string> {
  if (!keys) {
    return {} as Record<T, string>;
  }

  const safeUniqueId = id ? String(id + uid) : String(createRandomId(8) + uid);

  return keys.reduce(
    (acc, key) => ({
      ...acc,
      ...{ [key]: String(safeUniqueId + key) },
    }),
    {} as Record<T, string>
  );
}

const Checkbox = React.forwardRef((props: CheckboxProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    id,
    uid,
    option,
    size = 'sm',
    scheme = 'default',
    variant = 'filled',
    alignment = 'start',
    ...otherProps
  } = props;

  const modifiers = {
    [`Checkbox--${size}`]: size,
    [`Checkbox--${scheme}`]: scheme,
    [`Checkbox--${variant}`]: variant,
    [`Checkbox--${alignment}`]: alignment,
  };

  const elements = ['input', 'label', 'error', 'note'];
  const uniqueIds = createInputIds(uid, id, elements);
  const classNames = clsx('Checkbox', modifiers);

  return (
    <button {...otherProps} id={uniqueIds.input} ref={ref} className={classNames}>
      <CheckboxIcon state={option.state} />
      <div>
        <span id={uniqueIds.note}>{option.note}</span>
        <span id={uniqueIds.error}>{option.error}</span>
        <label id={uniqueIds.label} htmlFor={uniqueIds.input}>
          {option.label}
        </label>
      </div>
    </button>
  );
});

export type CheckboxGroupProps = React.ComponentPropsWithoutRef<'div'> & {
  options?: CheckboxOption[];
  orientation?: 'vertical' | 'horizontal';
};

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { options, orientation = 'vertical' } = props;

  const uid = React.useId();
  const className = clsx('CheckboxGroup', { [`CheckboxGroup--${orientation}`]: orientation });
  const parsedOptions = React.useMemo(() => parseCheckboxOptionData(options), [options]);

  return (
    <div className={className}>
      {parsedOptions.map((option) => {
        return <Checkbox key={option.value} uid={uid} option={option} />;
      })}
    </div>
  );
};

export default function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Toolbox" />
      <Page.Content>
        <CheckboxGroup options={CHECKBOX_TEST_DATA} />
      </Page.Content>
    </Page>
  );
}
