import { Page } from '@/app/common';

const DATA_SURFACE_TOKENS = [
  'tbdx-background-0',
  'tbdx-background-1',
  'tbdx-background-2',
  'tbdx-background-3',
  'tbdx-background-4',
  'tbdx-background-5',
];
const DATA_SURFACE_TEXT_TOKENS = [
  'tbdx-text-E0',
  'tbdx-text-E1',
  'tbdx-text-E2',
  'tbdx-text-E3',
  'tbdx-text-E4',
  'tbdx-text-E5',
];

const SurfaceSwatch = ({ tokenKey }: { tokenKey: string }) => {
  const tokens = {
    text: `var(--tbdx-text-A0)`,
    background: `var(--${tokenKey})`,
  };

  return <div style={{ backgroundColor: tokens.background, color: tokens.text }}>{tokenKey}</div>;
};

export const GallerySurface = () => (
  <>
    <Page.Hero title="Surface Gallery" />
    <Page.Content>
      {DATA_SURFACE_TOKENS.map((token, i) => (
        <SurfaceSwatch tokenKey={token} key={token} />
      ))}
    </Page.Content>
  </>
);
