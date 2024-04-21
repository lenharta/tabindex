import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '@/common/utils';

export interface AnchorGroupProps extends TBDX.AnchorGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

const defaultProps: Partial<AnchorGroupProps> = {};

export const AnchorGroupCTX = React.createContext({} as TBDX.AnchorGroupContext);
export const AnchorGroupProvider = AnchorGroupCTX.Provider;
export const useAnchorGroup = () => React.useContext(AnchorGroupCTX);

export const AnchorGroup = React.forwardRef<HTMLDivElement, AnchorGroupProps>((props, ref) => {
  const { children, ...otherProps } = props;

  const { orientation, className, size, block, theme, variant, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps
  );

  return (
    <div
      {...forwardedProps}
      className={clsx('AnchorGroup', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <AnchorGroupProvider value={{ block, size, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </AnchorGroupProvider>
    </div>
  );
});

AnchorGroup.displayName = 'common/Anchor.Group';
