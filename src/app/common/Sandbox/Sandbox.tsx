import { type CORE, createStaticFactory } from '@/components/factory';
import { SandboxControls } from './SandboxControls';
import { SandboxDisplay } from './SandboxDisplay';

export interface SandboxProps {}

export type SandboxFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SandboxProps;
  component: 'div';
  components: {
    Display: typeof SandboxDisplay;
    Controls: typeof SandboxControls;
  };
}>;

export const Sandbox = createStaticFactory<SandboxFactory>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});

Sandbox.displayName = '@TBDX/Sandbox';
Sandbox.Controls = SandboxControls;
Sandbox.Display = SandboxDisplay;
