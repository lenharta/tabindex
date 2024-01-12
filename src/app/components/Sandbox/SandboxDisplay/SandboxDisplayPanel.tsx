import { createFactory } from '@/utils';
import { type TFactorySandboxDisplayPanel } from '@/app/components/Sandbox';

export const SandboxDisplayPanel = createFactory<TFactorySandboxDisplayPanel>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="SandboxDisplay-Panel">
      {children}
    </div>
  );
});
