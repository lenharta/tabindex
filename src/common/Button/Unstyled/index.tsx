import { createFactory } from '@/utils';
import { type TFactoryUnstyledButton } from '@/common/Button';

export const UnstyledButton = createFactory<TFactoryUnstyledButton>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button ref={ref} {...otherProps}>
      {children}
    </button>
  );
});
