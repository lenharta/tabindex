import * as Icons from './library';
import { type IconComponent, type IconProps } from './config';

const defaultProps: IconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
};

export const Icon: IconComponent = (props) => {
  const { name = 'checkbox_checked_filled', size = 'sm', ...otherProps } = props;
  const iconProps = { ...defaultProps, ...otherProps };

  switch (name) {
    case 'checkbox_checked_filled':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxCheckedFilledSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxCheckedFilledMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxCheckedFilledLarge {...iconProps} />;
      }

    case 'checkbox_checked_outlined':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxCheckedOutlinedSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxCheckedOutlinedMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxCheckedOutlinedLarge {...iconProps} />;
      }

    case 'checkbox_unchecked_outlined':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxUncheckedOutlinedSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxUncheckedOutlinedMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxUncheckedOutlinedLarge {...iconProps} />;
      }

    case 'checkbox_unchecked_filled':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxUncheckedFilledSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxUncheckedFilledMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxUncheckedFilledLarge {...iconProps} />;
      }

    case 'checkbox_indeterminate_outlined':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxIndeterminateOutlinedSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxIndeterminateOutlinedMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxIndeterminateOutlinedLarge {...iconProps} />;
      }

    case 'checkbox_indeterminate_filled':
      switch (size) {
        case 'sm':
          return <Icons.CheckboxIndeterminateFilledSmall {...iconProps} />;
        case 'md':
          return <Icons.CheckboxIndeterminateFilledMedium {...iconProps} />;
        case 'lg':
          return <Icons.CheckboxIndeterminateFilledLarge {...iconProps} />;
      }

    default:
      return <Icons.CheckboxCheckedOutlinedSmall {...iconProps} />;
  }
};
