import { type IPropsSandbox } from './Sandbox.types';
import { SandboxControl } from './SandboxControl';
import { SandboxDisplay } from './SandboxDisplay';

export function Sandbox(props: IPropsSandbox) {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} className="Sandbox">
      <SandboxControl />
      <SandboxDisplay />
    </div>
  );
}
