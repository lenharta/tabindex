import type { TSize } from '@/core/types';
import type { Factory } from '@/utils';
import type { TKeyIcon } from '@/common/Icon';
// import type { IPropsCheckboxGroup } from '@/common/Checkbox/Group';

import { InlineInput } from '@/common/InlineInput';
import { useCheckboxGroupContext } from '@/common/Checkbox/Group';
import { createFactory, createThemeClasses } from '@/utils';

export type TCheckboxIcon = Extract<
  TKeyIcon,
  | 'square_check_fill'
  | 'square_check'
  | 'square_dash_fill'
  | 'square_dash'
  | 'square_fill'
  | 'square'
>;

export interface IPropsCheckbox {
  checked: 'true' | 'false' | 'indeterminate' | undefined;
  variant: 'outlined' | 'filled' | undefined;
  size: TSize | (string & {}) | undefined;
}

export interface IPropsCheckboxIcon extends React.ComponentPropsWithoutRef<'svg'> {
  icon: TCheckboxIcon | undefined;
}

export interface IPropsCheckboxIndicator extends React.ComponentPropsWithoutRef<'div'> {
  status: 'checked' | 'unchecked' | 'indeterminate' | undefined;
  checked: 'true' | 'false' | 'indeterminate' | undefined;
  variant: 'outlined' | 'filled' | undefined;
  children: React.ReactNode | undefined;
}

export type TFactoryCheckbox = Factory<{
  props: IPropsCheckbox;
  component: 'button';
  components: {
    // Group: TFactoryCheckboxGroup;
  };
}>;

export const Checkbox = createFactory<TFactoryCheckbox>((props, ref) => {
  const { size = 'sm', variant = 'outlined', className, checked, ...otherProps } = props;

  const ctx = useCheckboxGroupContext();
  console.log({ ctx });

  const classes = createThemeClasses({
    base: 'Checkbox',
    modifiers: { variant, size },
    className,
  });

  return (
    <InlineInput {...otherProps} ref={ref} className={classes}>
      Checkbox Icon
    </InlineInput>
  );
});

Checkbox.displayName = '@tabindex/Checkbox';
// Checkbox.Group = CheckboxGroup

// const CheckboxIndicator: TFactoryCheckbox['components']['Indicator'] = (props) => {
//   const { checked, variant } = props;
//   const name = checkboxIconLookup(checked, variant);
//   return (
//     <div className="Checkbox-indicator">
//       <Checkbox.Icon name={name} />
//     </div>
//   );
// };

// const CheckboxIcon: TFactoryCheckbox['components']['Icon'] = (props) => {
//   const { icon } = props;
//   return <Icon className="Checkbox-icon" name={icon} />;
// };

// Checkbox.displayName = '@tabindex/Checkbox';
// CheckboxIcon.displayName = '@tabindex/Checkbox.Icon';
// CheckboxIndicator.displayName = '@tabindex/Checkbox.Indicator';

// Checkbox.Icon = CheckboxIcon;
// Checkbox.Indicator = CheckboxIndicator;
