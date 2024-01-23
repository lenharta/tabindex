import React from 'react';
import { CheckboxGroupPovider } from './Checkbox.context';

export type CheckboxGroupBaseProps = React.ComponentPropsWithoutRef<'div'>;

export type CheckboxGroupProps = CheckboxGroupBaseProps & {
  value?: string[];
  onChange?: (value: string[]) => void;
  orientation?: 'horizontal' | 'vertical';
};

type UseGroupStateProps<T> = {
  value?: T;
  onChange?: (value: T) => void;
  defaultValue?: T;
};

function useGroupState<T>(props: UseGroupStateProps<T>) {
  const { defaultValue, onChange, value } = props;
  const [_value, _onChange] = React.useState(defaultValue);
  const stateChange = !onChange ? _onChange : onChange;
  const stateValue = !value ? _value : value;
  return [stateValue, stateChange] as const;
}

const findCheckboxState = (value: string, groupValue: string[]) => {
  const selected = groupValue.includes(value);
};

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const { value, onChange, orientation = 'vertical', children, ...otherProps } = props;
  const [state, onStateChange] = useGroupState<string[]>({ value, onChange, defaultValue: [] });

  // const [_value, _onChange] = React.useState<string[]>([]);
  // const stateValue = !value ? _value : value;
  // const stateChange = () => (!onChange ? _onChange : onChange);

  const ariaProps = {
    'aria-orientation': orientation,
  };

  return (
    <CheckboxGroupPovider value={{ value: state ?? [], onChange: onStateChange, orientation }}>
      <div {...ariaProps} {...otherProps} ref={ref}>
        {children}
      </div>
    </CheckboxGroupPovider>
  );
});
