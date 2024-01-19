import type { Factory } from '@/core/factory';
import { createFactory } from '@/core/factory';

export interface LabelBaseProps {}

export type LabelFactory = Factory<{
  props: LabelBaseProps;
  component: 'label';
  components: {};
}>;

export const Label = createFactory<LabelFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <label {...otherProps} ref={ref}>
      {children}
    </label>
  );
});