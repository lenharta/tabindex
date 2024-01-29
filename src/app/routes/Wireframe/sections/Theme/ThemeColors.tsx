import { ThemeSwatchGallery } from '../Theme/ThemeSwatch';

export const SurfaceGallery = () => (
  <ThemeSwatchGallery
    title="Surface Tokens"
    shades={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
    types={[
      'surface-base',
      'surface-base-interactive',
      'surface-invert',
      'surface-invert-interactive',
    ]}
  />
);

export const AccentBaseGallery = () => (
  <>
    <ThemeSwatchGallery
      title="Accent Tokens (base)"
      shades={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
      types={[
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
      ]}
    />
    <ThemeSwatchGallery
      title="Accent Tokens (base-interactive)"
      shades={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
      types={[
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
      ]}
    />
  </>
);

export const AccentAlphaGallery = () => (
  <>
    <ThemeSwatchGallery
      title="Accent Tokens (base-alpha)"
      shades={['A0', 'A1', 'A2', 'A3', 'A4', 'A5']}
      types={[
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
      ]}
    />
    <ThemeSwatchGallery
      title="Accent Tokens (base-interactive-alpha)"
      shades={['A0', 'A1', 'A2', 'A3', 'A4', 'A5']}
      types={[
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
      ]}
    />
    <ThemeSwatchGallery
      title="Accent Tokens (base-alpha--bordered)"
      shades={['A0', 'A1', 'A2', 'A3', 'A4', 'A5']}
      bordered
      types={[
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
      ]}
    />
    <ThemeSwatchGallery
      title="Accent Tokens (base-interactive-alpha--bordered)"
      shades={['A0', 'A1', 'A2', 'A3', 'A4', 'A5']}
      bordered
      types={[
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
      ]}
    />
  </>
);
