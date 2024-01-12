import { filterProps } from '../filter-props';

export function mergeProps<T extends Record<string, any>, U extends Partial<T>>(
  defaultProps: U,
  props: T
) {
  return { ...defaultProps, ...filterProps(props) };
}
