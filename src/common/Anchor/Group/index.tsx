import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '@/common/utils';

export interface AnchorGroupProps extends TBDX.AnchorGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const AnchorGroupCTX = React.createContext({} as TBDX.AnchorGroupContext);
export const AnchorGroupProvider = AnchorGroupCTX.Provider;
export const useAnchorGroup = () => React.useContext(AnchorGroupCTX);

const defaultProps: Partial<AnchorGroupProps> = {
  orientation: 'vertical',
};

export type AnchorGroupExoticComponent = React.ForwardRefExoticComponent<AnchorGroupProps>;

export const AnchorGroupRender = (
  props: AnchorGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { children, ...otherProps } = props;

  const { block, theme, variant, className, orientation, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps
  );

  return (
    <div
      {...forwardedProps}
      ref={ref}
      className={clsx('anchor-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <AnchorGroupProvider value={{ block, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </AnchorGroupProvider>
    </div>
  );
};

export const AnchorGroup = React.forwardRef(AnchorGroupRender) as AnchorGroupExoticComponent;
AnchorGroup.displayName = 'common/Anchor.Group';
