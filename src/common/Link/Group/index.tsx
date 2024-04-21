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

export const LinkGroupCTX = React.createContext({} as TBDX.LinkGroupContext);
export const LinkGroupProvider = LinkGroupCTX.Provider;
export const useLinkGroup = () => React.useContext(LinkGroupCTX);

export const LinkGroup = React.forwardRef<HTMLDivElement, LinkGroupProps>((props) => {
  const { children, ...otherProps } = props;

  const { block, className, size, theme, variant, orientation } = mergeProps(
    otherProps,
    defaultProps
  );

  return (
    <div
      className={clsx('LinkGroup', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <LinkGroupProvider value={{ size, block, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </LinkGroupProvider>
    </div>
  );
});

LinkGroup.displayName = 'common/Link.Group';
