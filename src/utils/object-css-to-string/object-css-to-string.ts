import { keys } from '../object-keys';
import { camelToKebab } from '../format-camel-to-kebab';

export function cssToString(css: React.CSSProperties) {
  return keys(css)
    .reduce((acc, value) => {
      const formatProperty = camelToKebab(value);
      const formatRule = `${acc}${formatProperty}:${css[value]};`;
      return css[value] !== undefined ? formatRule : acc;
    }, '')
    .trim();
}
