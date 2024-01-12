import { createFactory } from '@/utils';
import { type TFactorySandboxControlOptionMenu } from '@/app/components/Sandbox';

export const SandboxControlOptionMenu = createFactory<TFactorySandboxControlOptionMenu>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <div ref={ref} {...otherProps} className="SandboxControl-OptionMenu">
        {children}
      </div>
    );
  }
);

SandboxControlOptionMenu.displayName = '@tabindex/SandboxControl.Option';
