import {
  DATA_TBDX_SHADE,
  TBDXAccentVariantKey,
  TBDXAlpha,
  TBDXShade,
  TBDXSurfaceVariantKey,
} from '@/core/theme';

export type ThemeSwatchProps = {
  type: TBDXSurfaceVariantKey | TBDXAccentVariantKey;
  shade: TBDXShade | TBDXAlpha;
};

export type ThemeSwatchGroupProps = {
  type: TBDXSurfaceVariantKey | TBDXAccentVariantKey;
  shades: (TBDXShade | TBDXAlpha)[];
};

export type ThemeSwatchGalleryProps = {
  types: (TBDXSurfaceVariantKey | TBDXAccentVariantKey)[];
  shades: (TBDXShade | TBDXAlpha)[];
};

// const formatSwatchLabel = (color: string) => {
//   const filter = '-interactive';
//   const { length } = color;
//   const hasAlpha = color.includes('-A');
//   const isInteractive = color.includes(filter);
//   // const s = color.r

//   let shade;

//   if (isInteractive && hasAlpha) {
//     shade = color.slice(length - 3, length);
//   }

//   if (isInteractive && !hasAlpha) {
//     shade = color.slice(length - 2, length);
//     console.log('NON-ALPHA', shade);
//   }

//   return color;
// };

const formatSwatchLabel = (color: string) => {
  const filter = '-interactive';
  const isInteractive = color.includes(filter);
  return isInteractive ? color.replace(filter, '') : color;
};

export const ThemeSwatch = (props: ThemeSwatchProps) => {
  const { type = 'surface-base', shade = '1' } = props;
  const color = `${type}-${shade}`;
  return (
    <div className={`tbdx-swatch tbdx-${color}`}>
      <span className="tbdx-swatch-label">{formatSwatchLabel(color)}</span>
    </div>
  );
};

export const ThemeSwatchGroup = (props: ThemeSwatchGroupProps) => {
  const { type = 'surface-base', shades = DATA_TBDX_SHADE } = props;
  return (
    <div className="tbdx-swatch-group">
      {shades.map((value) => (
        <ThemeSwatch key={type + value} type={type} shade={value} />
      ))}
    </div>
  );
};

export const ThemeSwatchGallery = (props: ThemeSwatchGalleryProps) => {
  const { types = ['surface-base', 'surface-invert'], shades = DATA_TBDX_SHADE } = props;
  return (
    <div className="tbdx-swatch-gallery">
      {types.map((type) => (
        <ThemeSwatchGroup key={type} type={type} shades={shades} />
      ))}
    </div>
  );
};
