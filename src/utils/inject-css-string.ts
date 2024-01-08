import { objecCssToString } from '@/utils/object-css-to-string';

export function injectCssString(css: React.CSSProperties) {
  return { dangerouslySetInnerHTML: { __html: objecCssToString(css) } };
}
