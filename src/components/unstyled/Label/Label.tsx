import { type Factory, createFactory } from '@/core/factory';

export interface LabelBaseProps {
  htmlFor?: string | undefined;
  position?: 'left' | 'right';
}

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
