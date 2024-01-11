import { objecCssToString } from '@/utils/object-css-to-string';
import { type IMediaQueryInput, type IStyleInput } from './types';

export function createInlineStyles(props: IStyleInput) {
  const { selector, media, styles } = props;

  let result: string[] = [];

  if (styles !== undefined) {
    const formatBaseStyles = `${selector}{${objecCssToString(styles)}}`;
    result.push(formatBaseStyles || '');
  }

  if (media && Array.isArray(media)) {
    media.map((item) => {
      const formatStyles = objecCssToString(item.styles);
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

const demoMediaQueries: IMediaQueryInput[] = [
  { query: '(min-width: 40em)', styles: { backgroundColor: 'dodgerBlue' } },
  { query: '(min-width: 60em)', styles: { backgroundColor: 'indianred' } },
];

const demoBaseStyles: React.CSSProperties = {
  backgroundColor: 'orange',
  height: '100px',
  width: '100px',
  color: 'white',
};

export const DemoInlineStyle = () => {
  return (
    <>
      <InlineStyle
        selector="[data-inline-style-box]"
        styles={demoBaseStyles}
        media={demoMediaQueries}
      />
      <div data-demo-style-target />
    </>
  );
};

InlineStyle.displayName = '@/common/InlineStyle';
