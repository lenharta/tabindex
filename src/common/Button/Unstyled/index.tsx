import { factory } from '@/utils/create-factory';
import { type TFactoryUnstyledButton } from '@/common/Button';

export const UnstyledButton = factory<TFactoryUnstyledButton>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button ref={ref} {...otherProps}>
      {children}
    </button>
  );
});
