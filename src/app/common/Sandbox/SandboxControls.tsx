import { type CORE, createStaticFactory } from '@/components/factory';

export interface SandboxControlsProps {}

export type SandboxControlsFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SandboxControlsProps;
  component: 'div';
  components: {};
}>;

export const SandboxControls = createStaticFactory<SandboxControlsFactory>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
