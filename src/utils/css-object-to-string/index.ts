import { keys } from '../get-object-keys';
import { camelToKebabCase } from '../camel-to-kebab-case';

export function cssObjectToString(css: React.CSSProperties) {
  return keys(css)
    .reduce((acc, value) => {
      const formatCssProperty = camelToKebabCase(value);
      const formatCssRule = `${acc}${formatCssProperty}:${css[value]};`;
      return css[value] !== undefined ? formatCssRule : acc;
    }, '')
    .trim();
}
