import { type Factory, createPolymorphic } from '@/components/factory';

export type InlineInputProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  error?: string;
  note?: string;
};

export type OmittedInlineInputProps = Omit<InlineInputProps, 'className' | 'children'>;

type InlineInputFactory = Factory.Config<{
  component: 'button';
  props: InlineInputProps;
}>;

export const InlineInput = createPolymorphic<InlineInputFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
