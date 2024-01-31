import { Factory, createStatic } from '@/components/factory';
import clsx from 'clsx';
import React from 'react';

type LinkGroupProps = {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
};

type LinkGroupFactory = Factory.Config<{
  component: 'div';
  props: LinkGroupProps;
}>;

type LinkGroupContextValue = {
  orientation: 'horizontal' | 'vertical';
};

export const LinkGroupContext = React.createContext({} as LinkGroupContextValue);
export const LinkGroupProvider = LinkGroupContext.Provider;
export const useLinkGroupContext = () => React.useContext(LinkGroupContext);

export const LinkGroup = createStatic<LinkGroupFactory>((props) => {
  const { label, children, orientation = 'horizontal', className, ...otherProps } = props;

  const clxssName = clsx(`LinkGroup LinkGroup--${orientation}`, className);
  const ariaProps = { 'aria-orientation': orientation };

  return (
    <div className={clxssName} {...otherProps} {...ariaProps}>
      <LinkGroupProvider value={{ orientation }}>
        {label && <span className="LinkGroup-label">{label}</span>}
        <div className="LinkGroup-content">{children}</div>
      </LinkGroupProvider>
    </div>
  );
});