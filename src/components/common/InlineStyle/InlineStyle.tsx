import * as React from 'react';
import { cssToString } from '@/utils';

export interface InlineMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStyleInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineMediaQuery[];
}

export interface InlineStyleProps extends InlineStyleInput {
  nonce?: () => string;
}

export const createInlineStyles = (input: InlineStyleInput) => {
  const { selector, media, styles } = input;

  let result: string[] = [];

  if (styles !== undefined) {
    const selectorStyles = `${selector}{${cssToString(styles)}}`;
    result.push(selectorStyles || '');
  }
  if (media && Array.isArray(media)) {
    media.map((item) => {
      const queryStyles = cssToString(item.styles);
      result.push(`@media${item.query}{${selector}{${queryStyles}}}`);
    });
  }
  return result.join('').trim();
};

export const InlineStyle = (props: InlineStyleProps) => {
  const { selector, media, styles, nonce = () => '' } = props;
  return (
    <style
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: createInlineStyles({ selector, styles, media }) }}
    />
  );
};

InlineStyle.displayName = '@TBDX/InlineStyle';

const minWithStyles: Record<'em20' | 'em40' | 'em60' | 'em80', React.CSSProperties> = {
  em20: { backgroundColor: '#D2F1E4', color: '#515E56', borderColor: '#515E56' },
  em40: { backgroundColor: '#9B4646', color: '#D5D5D5', borderColor: '#D5D5D5' },
  em60: { backgroundColor: '#D8D0C1', color: '#65605A', borderColor: '#65605A' },
  em80: { backgroundColor: '#C6D4FF', color: '#555A6D', borderColor: '#555A6D' },
};

const baseQueryStyles: React.CSSProperties = {
  width: 240,
  height: 120,
  color: 'black',
  border: 'solid 2px',
  borderColor: 'white',
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

export const InlineStyleMediaQueryDemo = () => (
  <div style={baseQueryStyles}>
    <InlineStyle
      selector="[data-inline-style-box]"
      styles={baseQueryStyles}
      media={[
        { query: '(min-width: 20em)', styles: minWithStyles.em20 },
        { query: '(min-width: 40em)', styles: minWithStyles.em40 },
        { query: '(min-width: 60em)', styles: minWithStyles.em60 },
        { query: '(min-width: 80em)', styles: minWithStyles.em80 },
      ]}
    />
    <div data-inline-style-box />
  </div>
);
