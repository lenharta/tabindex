import { type TBDX } from '@/core/theme';

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

export type SwatchProps = {
  type: TBDX.SurfaceVariantKey | TBDX.AccentVariantKey;
  shade: TBDX.Shade | TBDX.Alpha;
  bordered?: boolean;
};

export const Swatch = (props: SwatchProps) => {
  const { type = 'surface-base', shade = '1', bordered } = props;
  const colorKey = formatSwatchKey(type, shade, bordered);
  return (
    <div className={`tbdx-swatch tbdx-${colorKey}`}>
      <span className="tbdx-swatch-label">{formatSwatchLabel(colorKey)}</span>
    </div>
  );
};
