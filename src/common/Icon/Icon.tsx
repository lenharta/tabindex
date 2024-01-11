import * as Icons from './library';
import { defaultIconProps, type IPropsIcon } from './types';

const formatIconLabel = (name: IPropsIcon['name']): string => {
  const format = name.split('_').join(' ').trim();
  return [format, 'icon'].join();
};

const useIconProps = (props: IPropsIcon) => {
  const { name = 'square', ...otherProps } = props;

  const label = formatIconLabel(name);
  const iconBaseProps = { id: otherProps['id'] || name };
  const iconAriaProps = { 'aria-label': otherProps['aria-label'] || label };

  return {
    ...otherProps,
    ...defaultIconProps,
    ...iconBaseProps,
    ...iconAriaProps,
  };
};

export const Icon = (props: IPropsIcon) => {
  const iconProps = useIconProps(props);
  switch (props.name) {
    case 'square':
      return <Icons.IconSquare {...iconProps} />;
    case 'square_check':
      return <Icons.IconSquareCheck {...iconProps} />;
    case 'square_check_fill':
      return <Icons.IconSquareCheckFill {...iconProps} />;
    case 'square_dash':
      return <Icons.IconSquareDash {...iconProps} />;
    case 'square_dash_fill':
      return <Icons.IconSquareDashFill {...iconProps} />;
    case 'square_fill':
      return <Icons.IconSquareFill {...iconProps} />;
  }
};
