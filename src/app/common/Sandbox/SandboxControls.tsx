import clsx from 'clsx';
import { type CORE, createStaticFactory } from '@/components/factory';

export interface SandboxControlsProps {}

export type SandboxControlsFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SandboxControlsProps;
  component: 'div';
  components: {};
}>;

export const SandboxControls = createStaticFactory<SandboxControlsFactory>((props, ref) => {
  const { component: Component = 'div', children, className, ...otherProps } = props;
  const clxss = clsx('tbdx-sandbox-controls', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      <span>Sandbox Controls</span>
    </Component>
  );
});
