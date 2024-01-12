import { type IPropsSandbox } from './Sandbox.types';
import { SandboxControl } from './SandboxControl';
import { SandboxDisplay } from './SandboxDisplay';

export function Sandbox(props: IPropsSandbox) {
  const {} = props;
  return (
    <div className="Sandbox">
      <SandboxControl />
      <SandboxDisplay />
    </div>
  );
}
