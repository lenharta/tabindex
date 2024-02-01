import { SandboxControls } from './SandboxControls';
import { SandboxDisplay } from './SandboxDisplay';

export const TEST_SANDBOX_META: Sandbox.Meta = {
  title: 'TestComponent',
  desc: 'An example component description',
  import: 'import {} from @/core/components',
  tags: ['tag-one', 'tag-two', 'tag-three'],
  url: 'https://example.com/',
};

export const SandboxLayout: typeof Sandbox.Layout & {
  Display: typeof Sandbox.Display;
  Controls: typeof Sandbox.Controls;
} = () => {
  return (
    <div className="tbdx-sandbox-layout">
      <SandboxLayout.Display />
      <SandboxLayout.Controls />
    </div>
  );
};

SandboxLayout.Controls = SandboxControls;
SandboxLayout.Display = SandboxDisplay;
