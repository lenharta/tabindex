import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';

export interface ButtonGroupProps extends TBDX.ButtonGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const ButtonGroupCTX = React.createContext({} as TBDX.ButtonGroupContext);
export const useButtonGroup = () => React.useContext(ButtonGroupCTX);

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
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
      className={clsx('ButtonGroup', className)}
      ref={ref}
    >
      <ButtonGroupCTX.Provider value={{ size, block, theme, variant }}>
        <React.Fragment>{children}</React.Fragment>
      </ButtonGroupCTX.Provider>
    </div>
  );
});

ButtonGroup.displayName = 'app/ButtonGroup';
