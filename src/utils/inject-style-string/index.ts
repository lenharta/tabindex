import { cssObjectToString } from '../css-object-to-string';

export function injectStyleString(css: React.CSSProperties) {
  return { dangerouslySetInnerHTML: { __html: cssObjectToString(css) } };
}
