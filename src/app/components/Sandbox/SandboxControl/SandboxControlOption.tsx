import { createFactory } from '@/utils';
import { type TFactorySandboxControlOption } from '@/app/components/Sandbox';

export const SandboxControlOption = createFactory<TFactorySandboxControlOption>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button ref={ref} {...otherProps} className="SandboxControl-Option">
      {children}
    </button>
  );
});
