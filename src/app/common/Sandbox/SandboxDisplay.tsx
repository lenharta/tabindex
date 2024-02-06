import { type CORE, createStaticFactory } from '@/components/factory';

export interface SandboxDisplayProps {}

export type SandboxDisplayFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SandboxDisplayProps;
  component: 'div';
  components: {};
}>;

export const SandboxDisplay = createStaticFactory<SandboxDisplayFactory>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
