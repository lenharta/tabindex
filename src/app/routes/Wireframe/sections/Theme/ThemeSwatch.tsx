import { Title } from '@/components/common';
import {
  DATA_TBDX_SHADE,
  type TBDXAlpha,
  type TBDXShade,
  type TBDXAccentVariantKey,
  type TBDXSurfaceVariantKey,
} from '@/core/theme';

export type ThemeSwatchProps = {
  type: TBDXSurfaceVariantKey | TBDXAccentVariantKey;
  shade: TBDXShade | TBDXAlpha;
  bordered?: boolean;
};

export type ThemeSwatchGroupProps = {
  type: TBDXSurfaceVariantKey | TBDXAccentVariantKey;
  shades: (TBDXShade | TBDXAlpha)[];
  bordered?: boolean;
};

export type ThemeSwatchGalleryProps = {
  title?: string;
  types: (TBDXSurfaceVariantKey | TBDXAccentVariantKey)[];
  shades: (TBDXShade | TBDXAlpha)[];
  bordered?: boolean;
};

const formatSwatchKey = (type: string, shade: string, bordered?: boolean) => {
  const isBordered = bordered ? '--bordered' : '';
  return [`${type}-${shade}`, isBordered].join('').trimEnd();
};

const formatSwatchLabel = (color: string) => {
  const filters = ['-interactive', '--bordered'];
  let colorKey = color;

  filters.forEach((v) => {
    if (colorKey.includes(v)) {
      colorKey = colorKey.replace(v, '');
    }
  });
  return colorKey;
};

export const ThemeSwatch = (props: ThemeSwatchProps) => {
  const { type = 'surface-base', shade = '1', bordered } = props;
  const colorKey = formatSwatchKey(type, shade, bordered);
  return (
    <div className={`tbdx-swatch tbdx-${colorKey}`}>
      <span className="tbdx-swatch-label">{formatSwatchLabel(colorKey)}</span>
    </div>
  );
};

export const ThemeSwatchGroup = (props: ThemeSwatchGroupProps) => {
  const { type = 'surface-base', shades = DATA_TBDX_SHADE, bordered } = props;
  return (
    <div className="tbdx-swatch-group">
      {shades.map((value) => (
        <ThemeSwatch key={type + value} type={type} shade={value} bordered={bordered} />
      ))}
    </div>
  );
};

export const ThemeSwatchGallery = (props: ThemeSwatchGalleryProps) => {
  const {
    title,
    types = ['surface-base', 'surface-invert'],
    shades = DATA_TBDX_SHADE,
    bordered,
  } = props;
  return (
    <div className="tbdx-swatch-gallery">
      <div className="tbdx-swatch-gallery-header">{title && <Title h2>{title}</Title>}</div>
      <div className="tbdx-swatch-gallery-content">
        {types.map((type) => (
          <ThemeSwatchGroup key={type} type={type} shades={shades} bordered={bordered} />
        ))}
      </div>
    </div>
  );
};
