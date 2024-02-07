import * as React from 'react';
import { type TBDX } from '@/types';
import { type CORE, createStaticFactory } from '@/components/factory';

export interface ToolGroupProps {
  size?: TBDX.Size;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
}

export type ToolGroupFactory = CORE.Factory<{
  component: 'div';
  props: ToolGroupProps;
  ref: HTMLDivElement;
}>;

export type ToolGroupContextValue = {
  size?: TBDX.Size;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
};

export const ToolGroupContext = React.createContext<ToolGroupContextValue>({});
export const ToolGroupProvider = ToolGroupContext.Provider;
export const useToolGroupCTX = () => React.useContext(ToolGroupContext);

export const ToolGroup = createStaticFactory<ToolGroupFactory>((props, ref) => {
  const { size, radius, accent, component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      <ToolGroupProvider value={{ size, radius, accent }}>{children}</ToolGroupProvider>
    </Component>
  );
});
