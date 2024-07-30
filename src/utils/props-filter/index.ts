import { keys } from '../object-keys';

// function filterProps<T extends Record<string, any>>(props: T) {
//   const objKeys = keys(props) as (keyof T)[];
//   return objKeys.reduce((acc, key) => {
//     if (props[key] !== undefined && typeof props[key] !== 'undefined') {
//       acc[key] = props[key];
//     }
//     return acc;
//   }, {} as Required<T>);
// }

export function filterProps<T extends Record<string, any>>(props: T) {
  return keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as Required<T>);
}
