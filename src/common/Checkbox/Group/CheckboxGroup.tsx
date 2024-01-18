import { createFactory, createThemeClasses } from '@/utils';
import { type TFactoryCheckboxGroup } from '../Checkbox.types';

const css = {
  root: 'CheckboxGroup-root',
};

const CheckboxGroup = createFactory<TFactoryCheckboxGroup>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    variant = 'outlined',
    orientation = 'vertical',
    className,
    children,
    ...otherProps
  } = props;

  const classes = createThemeClasses({
    base: css.root,
    modifiers: { orientation, size, variant, align },
    className,
  });

  return (
    <div {...otherProps} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export { CheckboxGroup };
