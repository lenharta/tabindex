import { filterProps } from '@/utils';

export function cx<T extends Record<string, any>>(props: {
  key: string;
  props?: Partial<T>;
  defaultProps?: Partial<T>;
  contextProps?: Partial<T>;
  className?: string;
}): string {
  const { key, props: baseProps, defaultProps, contextProps, className } = props;

  const mods = {
    ...defaultProps,
    ...(baseProps ? filterProps(baseProps) : {}),
    ...(contextProps ? filterProps(contextProps) : {}),
  };

  const result: string[] = [];

  const cssKey = (mod: string, value?: string) => {
    return value ? `${key}--${mod}-${value}` : `${key}--${mod}`;
  };

  result.push(key);

  for (const k in mods) {
    const hasKey = k !== undefined;
    const hasValue = mods[k] !== undefined;

    if (hasKey && hasValue) {
      result.push(cssKey(k, mods[k]));
    }
    if (className) {
      result.push(className);
    }
  }

  return result.join(' ').trimEnd();
}
