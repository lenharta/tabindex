import { defaultIconProps, type IPropsIcon } from './types';
import * as Icons from './library';

export const Icon = (props: IPropsIcon) => {
  const { name = 'square', ...otherProps } = props;
  const iconProps = { ...defaultIconProps, ...otherProps, 'aria-label': name };
  switch (name) {
    case 'square-dash':
      return <Icons.IconSquareDash {...iconProps} />;
    case 'square-dash-fill':
      return <Icons.IconSquareDashFill {...iconProps} />;
    case 'square-check':
      return <Icons.IconSquareCheck {...iconProps} />;
    case 'square-check-fill':
      return <Icons.IconSquareCheckFill {...iconProps} />;
    case 'square':
      return <Icons.IconSquare {...iconProps} />;
    case 'square-fill':
      return <Icons.IconSquareFill {...iconProps} />;
  }
};
