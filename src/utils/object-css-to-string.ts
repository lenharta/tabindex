import { keys } from './object-keys';
import { formatCamelToKebab } from './format-camel-to-kebab';

export function objecCssToString(css: React.CSSProperties) {
  return keys(css)
    .reduce((acc, value) => {
      const formatCssProperty = formatCamelToKebab(value);
      const formatCssRule = `${acc}${formatCssProperty}:${css[value]};`;
      return css[value] !== undefined ? formatCssRule : acc;
    }, '')
    .trim();
}
