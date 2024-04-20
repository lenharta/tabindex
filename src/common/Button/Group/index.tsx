import React from 'react';
import { TBDX } from '@/types';
import { createAttribute } from '@/common/utils/create-attribute';

export interface ButtonGroupProps extends TBDX.ButtonGroupProps {
  children?: React.ReactNode | undefined;
}

export const ButtonGroupCTX = React.createContext({} as ButtonGroupProps);
export const ButtonGroupProvider = ButtonGroupCTX.Provider;
export const useButtonGroupCTX = () => React.useContext(ButtonGroupCTX);

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { children, orientation = 'horizontal', ...otherProps } = props;

  const dataProps = {
    [createAttribute('orientation')]: orientation,
  };

  const a11yProps = {
    'aria-orientation': orientation,
  };

  return (
    <div {...otherProps} {...dataProps} {...a11yProps} className="ButtonGroup" ref={ref}>
      <ButtonGroupProvider value={{ orientation }}>
        <React.Fragment>{children}</React.Fragment>
      </ButtonGroupProvider>
    </div>
  );
});

ButtonGroup.displayName = 'app/ButtonGroup';
