import { useClxss } from '../use-clxss/use-clxss';
import { filterProps } from '@/utils';

export function useProps<T extends Record<string, any>, U extends Partial<T>>(
  clxss: string,
  props?: T,
  defaultProps?: U,
  defaultClxss?: string
) {
  const className = useClxss(clxss, { ...defaultProps, ...props }, defaultClxss);
  return { ...defaultProps, ...filterProps(props ?? {}), className };
}
