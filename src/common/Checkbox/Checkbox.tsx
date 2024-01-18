import { Icon } from '@/common/Icon';
import { InlineInput } from '@/common/InlineInput';
import { createFactory, createThemeClasses } from '@/utils';
import { checkboxIconLookup } from './Checkbox.utils';
import {
  type TFactoryCheckbox,
  type IPropsCheckboxIcon,
  type IPropsCheckboxIndicator,
} from './Checkbox.types';

const css = {
  root: 'Checkbox-root',
  indicator: 'Checkbox-indicator',
  indicatorIcon: 'Checkbox-indicator-icon',
};

const Checkbox = createFactory<TFactoryCheckbox>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    variant = 'outlined',
    className,
    checked,
    ...otherProps
  } = props;

  const classes = createThemeClasses({
    base: css.root,
    modifiers: { variant, align, size },
    className,
  });

  return (
    <InlineInput {...otherProps} ref={ref} className={classes}>
      <Checkbox.Indicator checked={checked} variant={variant} />
    </InlineInput>
  );
});

const CheckboxIndicator = (props: IPropsCheckboxIndicator) => {
  const { checked, variant } = props;
  const name = checkboxIconLookup(checked, variant);
  return (
    <div className={css.indicator}>
      <Checkbox.Icon name={name} />
    </div>
  );
};

const CheckboxIcon = (props: IPropsCheckboxIcon) => {
  const { name } = props;
  return <Icon className={css.indicatorIcon} name={name} />;
};

Checkbox.displayName = '@tabindex/Checkbox';
CheckboxIcon.displayName = '@tabindex/Checkbox.Icon';
CheckboxIndicator.displayName = '@tabindex/Checkbox.Indicator';

Checkbox.Icon = CheckboxIcon;
Checkbox.Indicator = CheckboxIndicator;

export { Checkbox };
