import { cssToString } from '../object-css-to-string';

export function injectCSS(css: React.CSSProperties) {
  return { dangerouslySetInnerHTML: { __html: cssToString(css) } };
}
