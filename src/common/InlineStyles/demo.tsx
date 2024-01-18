import { InlineStyle } from './InlineStyles';
import type { MediaQueryInput } from './InlineStyles';

const demoMediaQueries: MediaQueryInput[] = [
  { query: '(min-width: 40em)', styles: { backgroundColor: 'dodgerBlue' } },
  { query: '(min-width: 60em)', styles: { backgroundColor: 'indianred' } },
];

const demoBaseStyles: MediaQueryInput['styles'] = {
  backgroundColor: 'orange',
  height: '100px',
  width: '100px',
  color: 'white',
};

export function InlineStyleDemo() {
  return (
    <div>
      <InlineStyle
        selector="[data-inline-style-box]"
        styles={demoBaseStyles}
        media={demoMediaQueries}
      />
      <div data-demo-style-target />
    </div>
  );
}
