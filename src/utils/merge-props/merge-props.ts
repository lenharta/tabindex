import { filterProps } from '../filter-props';

export function mergeProps<T extends Record<string, any>>({
  props,
  context,
  defaultProps,
}: {
  props: T;
  context: Partial<T>;
  defaultProps: Partial<T>;
}) {
  return {
    ...defaultProps,
    ...filterProps({ ...context, ...props }),
  };
}
