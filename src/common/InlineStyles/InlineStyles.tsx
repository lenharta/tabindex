import * as React from 'react';
import { cssToString } from '@/utils';

export interface MediaQueryInput {
  query: string;
  styles: React.CSSProperties;
}

export interface IStyleInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: MediaQueryInput[];
}

export interface IInlineStyles {
  selector: string;
  styles?: React.CSSProperties;
  media?: MediaQueryInput[];
}

export function createInlineStyles(props: IStyleInput) {
  const { selector, media, styles } = props;

  let result: string[] = [];

  if (styles !== undefined) {
    const formatBaseStyles = `${selector}{${cssToString(styles)}}`;
    result.push(formatBaseStyles || '');
  }

  if (media && Array.isArray(media)) {
    media.map((item) => {
      const formatStyles = cssToString(item.styles);
      result.push(`@media${item.query}{${selector}{${formatStyles}}}`);
    });
  }

  return result.join('').trim();
}

export function InlineStyle(props: IStyleInput & { nonce?: () => string }) {
  const { selector, media, styles, nonce = () => '' } = props;
  return (
    <style
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: createInlineStyles({ selector, styles, media }) }}
    />
  );
}

InlineStyle.displayName = '@/common/InlineStyle';
