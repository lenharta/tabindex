import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';

export interface ButtonGroupProps extends TBDX.ButtonGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type ButtonGroupExoticComponent = React.ForwardRefExoticComponent<ButtonGroupProps>;
export const ButtonGroupCTX = React.createContext({} as TBDX.ButtonGroupContext);
export const useButtonGroup = () => React.useContext(ButtonGroupCTX);

export const ButtonGroupRender = (
  props: ButtonGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    size,
    block,
    theme,
    variant,
    children,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <div
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={clsx('button-group', className)}
      ref={ref}
    >
      <ButtonGroupCTX.Provider value={{ size, block, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </ButtonGroupCTX.Provider>
    </div>
  );
};

export const ButtonGroup = React.forwardRef(ButtonGroupRender) as ButtonGroupExoticComponent;

ButtonGroup.displayName = 'app/ButtonGroup';
