import { createFactory } from '@/utils';
import { type TFactorySandboxDisplayAction } from '@/app/components/Sandbox';

export const SandboxDisplayAction = createFactory<TFactorySandboxDisplayAction>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button ref={ref} {...otherProps} className="SandboxDisplay-Action">
      {children}
    </button>
  );
});
