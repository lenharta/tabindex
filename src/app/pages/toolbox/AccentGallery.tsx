import { Page, SwatchGallery } from '@/app/common';
import { Link } from '@/components/common';
import { type TBDXAccentVariantKey, type TBDXAlpha, type TBDXShade } from '@/core/theme';

const DATA_ACCENT_GALLERY_SHADES: TBDXShade[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const DATA_ACCENT_GALLERY_SHADES_ALPHA: TBDXAlpha[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];

const DATA_ACCENT_GALLERY_BASE_KEYS: TBDXAccentVariantKey[] = [
  'orange-base',
  'yellow-base',
  'green-base',
  'cyan-base',
  'blue-base',
  'indigo-base',
  'purple-base',
  'violet-base',
  'pink-base',
  'magenta-base',
  'red-base',
];

const DATA_ACCENT_GALLERY_INTERACTIVE_KEYS: TBDXAccentVariantKey[] = [
  'orange-base-interactive',
  'yellow-base-interactive',
  'green-base-interactive',
  'cyan-base-interactive',
  'blue-base-interactive',
  'indigo-base-interactive',
  'purple-base-interactive',
  'violet-base-interactive',
  'pink-base-interactive',
  'magenta-base-interactive',
  'red-base-interactive',
];

const AccentGalleryBase = () => (
  <SwatchGallery
    title="Accent Color (base)"
    types={DATA_ACCENT_GALLERY_BASE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES}
  />
);
const AccentGalleryBaseInteractive = () => (
  <SwatchGallery
    title="Accent Color (base-interactive)"
    types={DATA_ACCENT_GALLERY_INTERACTIVE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES}
  />
);

const AccentGalleryBaseAlpha = () => (
  <SwatchGallery
    title="Accent Color (base-alpha)"
    types={DATA_ACCENT_GALLERY_BASE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES_ALPHA}
  />
);

const AccentGalleryBaseAlphaInteractive = () => (
  <SwatchGallery
    title="Accent Color (base-alpha-interactive)"
    types={DATA_ACCENT_GALLERY_INTERACTIVE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES_ALPHA}
  />
);

const AccentGalleryBaseAlphaBordered = () => (
  <SwatchGallery
    title="Accent Color (base-alpha--bordered)"
    types={DATA_ACCENT_GALLERY_BASE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES_ALPHA}
    bordered
  />
);

const AccentGalleryBaseAlphaInteractiveBordered = () => (
  <SwatchGallery
    title="Accent Color (base-alpha-interactive--bordered)"
    types={DATA_ACCENT_GALLERY_INTERACTIVE_KEYS}
    shades={DATA_ACCENT_GALLERY_SHADES_ALPHA}
    bordered
  />
);

export const AccentGallery = () => (
  <>
    <Page.Hero title="Accent Gallery" />
    <Page.Content>
      <Link to="/toolbox" label="Back to Overview" />
      <AccentGalleryBase />
      <AccentGalleryBaseInteractive />
      <AccentGalleryBaseAlpha />
      <AccentGalleryBaseAlphaInteractive />
      <AccentGalleryBaseAlphaBordered />
      <AccentGalleryBaseAlphaInteractiveBordered />
    </Page.Content>
  </>
);
