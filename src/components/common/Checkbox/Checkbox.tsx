import clsx from 'clsx';
import { CheckboxGroup } from './CheckboxGroup';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type InlineInputConsumerProps, InlineInput } from '../InlineInput';

export type CheckboxProps = InlineInputConsumerProps & {
  scheme?: 'primary' | 'secondary' | 'action';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'rd';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type CheckboxFactory = Factory.Config<{
  props: CheckboxProps;
  component: 'button';
  components: {
    Group: typeof CheckboxGroup;
  };
}>;

export const CheckboxIcon = () => <div>Icon</div>;

export const Checkbox = createPolymorphic<CheckboxFactory>((props, ref) => {
  const {
    size,
    note,
    error,
    label,
    radius,
    scheme,
    disabled,
    readonly,
    component = 'button',
    ...otherProps
  } = props;

  const className = clsx('Checkbox', {
    [`Checkbox--${size}`]: size !== undefined,
    [`Checkbox--${radius}`]: radius !== undefined,
    [`Checkbox--${scheme}`]: scheme !== undefined,
  });

  return (
    <InlineInput
      {...otherProps}
      note={note}
      error={error}
      label={label}
      disabled={disabled}
      readonly={readonly}
      component={component}
      className={className}
      ref={ref}
    >
      <CheckboxIcon />
    </InlineInput>
  );
});
