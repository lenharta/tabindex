import clsx from 'clsx';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';

function Title(props: TBDX.TitleProps) {
  const { as: Component = 'h2', fz, fe, ff, fw, className, children, ...otherProps } = props;

  return (
    <Component
      className={clsx(
        `${PREFIX}-title`,
        { [`${PREFIX}-title--fz-${fz}`]: fz },
        { [`${PREFIX}-title--fe-${fe}`]: fe },
        { [`${PREFIX}-title--ff-${ff}`]: ff },
        { [`${PREFIX}-title--fw-${fw}`]: fw },
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
}

Title.displayName = 'Common.Title';
export { Title };
