import * as React from 'react';
import { cssToString } from '@/utils';
import { type StaticFactory, createStaticFactory } from '@/core/factory';

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

export type InlineStyleFactory = StaticFactory<{
  props: InlineStyleProps;
  component: 'style';
  components: {};
}>;

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

export const InlineStyle = createStaticFactory<InlineStyleFactory>((props: InlineStyleProps) => {
  const { selector, media, styles, nonce = () => '' } = props;
  return (
    <style
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: createInlineStyles({ selector, styles, media }) }}
    />
  );
});

InlineStyle.displayName = '@TBDX/InlineStyle';

// const demoMediaQueries: MediaQueryInput[] = [
//   { query: '(min-width: 40em)', styles: { backgroundColor: 'dodgerBlue' } },
//   { query: '(min-width: 60em)', styles: { backgroundColor: 'indianred' } },
// ];

// const demoBaseStyles: MediaQueryInput['styles'] = {
//   backgroundColor: 'orange',
//   height: '100px',
//   width: '100px',
//   color: 'white',
// };

// export function InlineStyleDemo() {
//   return (
//     <div>
//       <InlineStyle
//         selector="[data-inline-style-box]"
//         styles={demoBaseStyles}
//         media={demoMediaQueries}
//       />
//       <div data-demo-style-target />
//     </div>
//   );
// }
