import { keys } from '@/utils';

export function filterProps<T extends Record<string, any>>(props: T) {
  return keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as Required<T>);
}
