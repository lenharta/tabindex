import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryButtonGroup } from '@/common/Button/types';

export const ButtonGroup = factory<TFactoryButtonGroup>((props, ref) => {
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
    base: 'ButtonGroup',
    modifiers: { size, align, scheme, orientation },
    className,
  });

  return (
    <div ref={ref} {...otherProps} className={css}>
      {children}
    </div>
  );
});
