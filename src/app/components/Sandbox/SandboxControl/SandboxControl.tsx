import { createFactory } from '@/utils';

import {
  SandboxControlPanel,
  SandboxControlOption,
  SandboxControlOptionMenu,
  type TFactorySandboxControl,
} from '@/app/components/Sandbox';

export const SandboxControl = createFactory<TFactorySandboxControl>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="SandboxControl">
      {children}
    </div>
  );
});

SandboxControl.Panel = SandboxControlPanel;
SandboxControl.Option = SandboxControlOption;
SandboxControl.OptionMenu = SandboxControlOptionMenu;
SandboxControl.displayName = '@tabindex/SandboxControl';
