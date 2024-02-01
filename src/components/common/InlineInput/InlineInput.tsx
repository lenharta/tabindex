import { type Factory, createPolymorphic } from '@/components/factory';
import { Label } from '../Label';
import { Text } from '../Text';

export type InlineInputProps = {
  role?: React.AriaRole;
  note?: string;
  error?: string;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export type InlineInputFactory = Factory.Config<{
  component: 'button';
  props: InlineInputProps;
}>;

export const InlineInput = createPolymorphic<InlineInputFactory>((props, ref) => {
  const {
    role,
    note,
    label,
    error,
    disabled,
    readonly,
    children,
    component: Component = 'button',
    ...otherProps
  } = props;

  return (
    <Component
      {...otherProps}
      ref={ref}
      role={role}
      type="button"
      data-disabled={disabled}
      aria-disabled={disabled}
      data-readonly={readonly}
      aria-readonly={readonly}
    >
      {children}
      <div>
        {label && <Label>{label}</Label>}
        {error && <Text>{error}</Text>}
        {note && <Text>{note}</Text>}
      </div>
    </Component>
  );
});
