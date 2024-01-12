import { createFactory } from '@/utils';
import { type TFactorySandboxDisplayActionMenu } from '@/app/components/Sandbox';

export const SandboxDisplayActionMenu = createFactory<TFactorySandboxDisplayActionMenu>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <div ref={ref} {...otherProps} className="SandboxDisplay-ActionMenu">
        {children}
      </div>
    );
  }
);
