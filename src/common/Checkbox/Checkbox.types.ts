import { type Factory } from '@/utils';
import { type TAlignment, type TOrientation, type TSize } from '@/core/types';

type TCheckboxType = 'button';
type TCheckboxValue = 'true' | 'false' | 'indeterminate';
type TCheckboxStatus = 'checked' | 'unchecked' | 'indeterminate';
type TCheckboxVariant = 'outlined' | 'filled';
type TCheckboxIconKey = `${TCheckboxStatus}_${TCheckboxVariant}`;
type TCheckboxIconName =
  | 'square_check_fill'
  | 'square_check'
  | 'square_dash_fill'
  | 'square_dash'
  | 'square_fill'
  | 'square';

interface IPropsCheckbox {
  onChange?: () => void | ((checked: TCheckboxValue) => void);
  checked?: TCheckboxValue;
  variant?: TCheckboxVariant;
  align?: TAlignment;
  size?: TSize;
}

interface IPropsCheckboxIcon {
  name?: TCheckboxIconName;
}

interface IPropsCheckboxIndicator {
  checked?: TCheckboxValue;
  children?: React.ReactNode;
  variant?: TCheckboxVariant;
  status?: TCheckboxStatus;
}

interface IPropsCheckboxGroup {
  size?: TSize;
  align?: TAlignment;
  variant?: TCheckboxVariant;
  orientation?: TOrientation;
}

interface TContextCheckboxGroup {
  checked: TCheckboxValue[];
  onChange: (options: TCheckboxValue[]) => void;
  orientation: TOrientation;
  variant: TCheckboxVariant;
  align: TAlignment;
  size: TSize;
}

type TFactoryCheckbox = Factory<{
  props: IPropsCheckbox;
  component: TCheckboxType;
  components: {
    Icon: React.FC<IPropsCheckboxIcon>;
    Indicator: React.FC<IPropsCheckboxIndicator>;
  };
}>;

type TFactoryCheckboxGroup = Factory<{
  props: IPropsCheckboxGroup;
  component: 'div';
}>;

export {
  type TCheckboxType,
  type TCheckboxValue,
  type TCheckboxStatus,
  type TCheckboxVariant,
  type TCheckboxIconKey,
  type TCheckboxIconName,
  type IPropsCheckbox,
  type IPropsCheckboxIcon,
  type IPropsCheckboxIndicator,
  type IPropsCheckboxGroup,
  type TFactoryCheckbox,
  type TFactoryCheckboxGroup,
  type TContextCheckboxGroup,
};
