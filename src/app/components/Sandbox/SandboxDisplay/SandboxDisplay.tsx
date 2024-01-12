import { createFactory } from '@/utils';

import {
  SandboxDisplayPanel,
  SandboxDisplayAction,
  SandboxDisplayActionMenu,
  type TFactorySandboxDisplay,
} from '@/app/components/Sandbox';

export const SandboxDisplay = createFactory<TFactorySandboxDisplay>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="SandboxDisplay">
      {children}
    </div>
  );
});

SandboxDisplay.Panel = SandboxDisplayPanel;
SandboxDisplay.Action = SandboxDisplayAction;
SandboxDisplay.ActionMenu = SandboxDisplayActionMenu;

SandboxDisplay.displayName = '@tabindex/SandboxDisplay';
SandboxDisplay.Panel.displayName = '@tabindex/SandboxDisplay.Panel';
SandboxDisplay.Action.displayName = '@tabindex/SandboxDisplay.Action';
SandboxDisplay.ActionMenu.displayName = '@tabindex/SandboxDisplay.ActionMenu';
