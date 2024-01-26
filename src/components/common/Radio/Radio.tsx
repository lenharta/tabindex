import clsx from 'clsx';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type InlineInputConsumerProps, InlineInput } from '../InlineInput';

export type RadioProps = InlineInputConsumerProps & {
  scheme?: 'primary' | 'secondary' | 'action';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'rd';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type RadioFactory = Factory.Config<{
  component: 'button';
  props: RadioProps;
}>;

export const RadioIcon = () => <div>Icon</div>;

export const Radio = createPolymorphic<RadioFactory>((props, ref) => {
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

  const className = clsx('Radio', {
    [`Radio--${size}`]: size !== undefined,
    [`Radio--${radius}`]: radius !== undefined,
    [`Radio--${scheme}`]: scheme !== undefined,
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
      <RadioIcon />
    </InlineInput>
  );
});
