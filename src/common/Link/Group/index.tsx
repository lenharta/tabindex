import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '@/common/utils';

export interface LinkGroupProps extends TBDX.LinkGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

const defaultProps: Partial<LinkGroupProps> = {
  orientation: 'vertical',
};

export type LinkGroupExoticComponent = React.ForwardRefExoticComponent<LinkGroupProps>;

export const LinkGroupCTX = React.createContext({} as TBDX.LinkGroupContext);
export const LinkGroupProvider = LinkGroupCTX.Provider;
export const useLinkGroup = () => React.useContext(LinkGroupCTX);

export const LinkGroupRender = (props: LinkGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { children, ...otherProps } = props;

  const { block, className, theme, variant, orientation } = mergeProps(otherProps, defaultProps);

  return (
    <div
      ref={ref}
      className={clsx('link-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <LinkGroupProvider value={{ block, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </LinkGroupProvider>
    </div>
  );
};

export const LinkGroup = React.forwardRef(LinkGroupRender) as LinkGroupExoticComponent;
LinkGroup.displayName = 'common/Link.Group';
