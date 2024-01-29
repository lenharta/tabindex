import { ThemeSwatchGallery } from '../Theme/ThemeSwatch';

export const SurfaceGallery = () => (
  <ThemeSwatchGallery
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
  </>
);
