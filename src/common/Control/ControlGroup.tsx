import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryControlGroup } from '@/common/Control';

export const ControlGroup = factory<TFactoryControlGroup>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    scheme = 'default',
    orientation = 'vertical',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'ControlGroup',
    modifiers: { size, align, scheme, orientation },
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});
