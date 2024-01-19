import { type Factory, createFactory } from '@/core/factory';
import { ButtonInput } from '@/components/unstyled';

export interface ToggleBaseProps {}

export type ToggleFactory = Factory<{
  props: ToggleBaseProps;
  component: 'button';
  components: {};
}>;

export const Toggle = createFactory<ToggleFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <ButtonInput {...otherProps} ref={ref}>
      {children}
    </ButtonInput>
  );
});
