import * as React from 'react';
import clsx from 'clsx';

import { type CORE, createStaticFactory } from '@/components/factory';
import { Button, ButtonUnstyled, Icon, Space } from '@/components/common';
import { useThemeCTX } from '@/app/store';

export interface SandboxDisplayProps {}

export type SandboxDisplayFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SandboxDisplayProps;
  component: 'div';
  components: {};
}>;

export const SandboxDisplay = createStaticFactory<SandboxDisplayFactory>((props, ref) => {
  const { className, component: Component = 'div', children, ...otherProps } = props;

  const context = useThemeCTX();

  const [mode, setMode] = React.useState(context.mode);

  const toggleMode = () => setMode((current) => (current === 'dark' ? 'light' : 'dark'));

  const clxss = clsx('tbdx-sandbox-display', `tbdx-sandbox-display--mode-${mode}`, className);

  return (
    <>
      <Component {...otherProps} ref={ref} className={clxss} data-prefers-color-scheme={mode}>
        <ButtonUnstyled onClick={toggleMode} className="tbdx-sandbox-display-tool">
          {mode === 'dark' ? <Icon name="moon" size="sm" /> : <Icon name="sun_filled" size="sm" />}
        </ButtonUnstyled>
        <Button scheme="secondary">Button</Button>
        <Button scheme="primary">Button</Button>
        {children}
      </Component>
      <Space size="xl" />
    </>
  );
});
