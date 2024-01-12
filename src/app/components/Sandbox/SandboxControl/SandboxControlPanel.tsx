import { createFactory } from '@/utils';
import { type TFactorySandboxControlPanel } from '@/app/components/Sandbox';

export const SandboxControlPanel = createFactory<TFactorySandboxControlPanel>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="SandboxControl-Panel">
      {children}
      <span>SandboxControl-panel</span>
    </div>
  );
});
