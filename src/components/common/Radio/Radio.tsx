import { type Factory, createFactory } from '@/core/factory';
import { ButtonInput } from '@/components/unstyled';

export interface RadioBaseProps {}

export type RadioFactory = Factory<{
  props: RadioBaseProps;
  component: 'button';
  components: {};
}>;

export const Radio = createFactory<RadioFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <ButtonInput {...otherProps} ref={ref}>
      {children}
    </ButtonInput>
  );
});
