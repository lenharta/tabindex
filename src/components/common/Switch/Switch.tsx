import clsx from 'clsx';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type OmittedInlineInputProps, InlineInput } from '../InlineInput';

export type SwitchProps = OmittedInlineInputProps & {
  scheme?: 'primary' | 'secondary' | 'action';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'rd';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type SwitchFactory = Factory.Config<{
  component: 'button';
  props: SwitchProps;
}>;

export const SwitchIcon = () => <div>Icon</div>;

export const Switch = createPolymorphic<SwitchFactory>((props, ref) => {
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

  const className = clsx('Switch', {
    [`Switch--${size}`]: size !== undefined,
    [`Switch--${radius}`]: radius !== undefined,
    [`Switch--${scheme}`]: scheme !== undefined,
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
      <SwitchIcon />
    </InlineInput>
  );
});
