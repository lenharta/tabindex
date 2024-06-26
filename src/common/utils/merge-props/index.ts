import { filterProps } from '../filter-props';

export function mergeProps<T extends Record<string, any>>(
  props: T,
  defaultProps: Partial<T>,
  contextProps?: any
): Required<T> {
  return {
    ...defaultProps,
    ...filterProps(props),
    ...(contextProps ? filterProps(contextProps) : {}),
  } as Required<T>;
}
