import { type Factory, createFactory } from '@/core/factory';
import { ButtonInput } from '@/components/unstyled';

export interface CheckboxBaseProps {}

export type CheckboxFactory = Factory<{
  props: CheckboxBaseProps;
  component: 'button';
  components: {};
}>;

export const Checkbox = createFactory<CheckboxFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <ButtonInput {...otherProps} ref={ref}>
      {children}
    </ButtonInput>
  );
});
