import * as React from 'react';
import clsx from 'clsx';

export function useClxss<T extends Record<string, any>>(
  baseClxss: string,
  modifiers?: T,
  otherClxss?: string
) {
  if (!modifiers) return '';

  const buildModifer = (key: keyof T) => {
    const mods = `${baseClxss}--${String(key)}-${modifiers[key]}`;
    const payload = { [mods]: modifiers[key] };
    return modifiers[key] ? payload : {};
  };

  return React.useMemo(
    () =>
      clsx(
        baseClxss,
        Object.keys(modifiers).reduce(
          (acc, key: keyof T) => ({
            ...acc,
            ...buildModifer(key),
          }),
          {} as T
        ),
        otherClxss
      ),
    [baseClxss, modifiers, otherClxss]
  );
}
