import clsx from 'clsx';
import { keys } from '../object-keys';

export interface ICreateThemeClasses<T extends object> {
  /** Defines a base instanciated className */
  base: string;
  /** Defines an object of modifier properties passed from the parent element */
  modifiers: T;
  /** Specifies a default HTML className passed from the parent elemen */
  className?: string;
}

export function createThemeClasses<T extends object>(props: ICreateThemeClasses<T>) {
  const { base, className, modifiers } = props;
  return clsx(
    base,
    keys(modifiers)
      .reduce((acc, mod) => {
        if (!mod) return '';
        return (acc += `${' '}${base}--${modifiers[mod]}`);
      }, '')
      .trim(),
    className
  );
}
