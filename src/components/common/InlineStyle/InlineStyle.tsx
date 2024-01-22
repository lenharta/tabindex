import * as React from 'react';
import { cssToString } from '@/utils';
import { type StaticFactory, createStaticFactory } from '@/core/factory';

export interface InlineStyleMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStyleInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStyleMediaQuery[];
}

export const createInlineStyles = (input: InlineStyleInput) => {
  const { selector, media, styles } = input;

  let result: string[] = [];

  if (styles !== undefined) {
    const initializeSelectorStyles = `${selector}{${cssToString(styles)}}`;
    result.push(initializeSelectorStyles || '');
  }
  if (media && Array.isArray(media)) {
    media.map((item) => {
      const initializeQueryStyles = cssToString(item.styles);
      result.push(`@media${item.query}{${selector}{${initializeQueryStyles}}}`);
    });
  }
  return result.join('').trim();
};

export interface InlineStyleProps extends InlineStyleInput {
  nonce?: () => string;
}

export type InlineStyleFactory = StaticFactory<{
  props: InlineStyleProps;
  component: 'style';
  components: {};
}>;

export const InlineStyle = createStaticFactory<InlineStyleFactory>((props: InlineStyleProps) => {
  const { selector, media, styles, nonce = () => '' } = props;
  return (
    <style
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: createInlineStyles({ selector, styles, media }) }}
    />
  );
});

InlineStyle.displayName = '@tabindex/InlineStyle';

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
