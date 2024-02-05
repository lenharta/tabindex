import * as React from 'react';
import clsx from 'clsx';

import { type CORE, createStaticFactory } from '@/components/factory';

type LinkGroupProps = {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
};

type LinkGroupFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: LinkGroupProps;
  component: 'div';
}>;

type LinkGroupContextValue = {
  orientation: 'horizontal' | 'vertical';
};

export const LinkGroupContext = React.createContext({} as LinkGroupContextValue);
export const LinkGroupProvider = LinkGroupContext.Provider;
export const useLinkGroupContext = () => React.useContext(LinkGroupContext);

export const LinkGroup = createStaticFactory<LinkGroupFactory>((props, ref) => {
  const {
    label,
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxssName = clsx(
    'tbdx-link-group',
    {
      [`tbdx-link-group--${orientation}`]: orientation,
    },
    className
  );

  return (
    <div {...otherProps} ref={ref} aria-orientation={orientation} className={clxssName}>
      <LinkGroupProvider value={{ orientation }}>
        {label && <span className="tbdx-link-group-label">{label}</span>}
        <div className="tbdx-link-group-content">{children}</div>
      </LinkGroupProvider>
    </div>
  );
});
