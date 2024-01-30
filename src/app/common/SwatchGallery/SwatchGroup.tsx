import {
  DATA_TBDX_SHADE,
  type TBDXAlpha,
  type TBDXShade,
  type TBDXAccentVariantKey,
  type TBDXSurfaceVariantKey,
} from '@/core/theme';

import { Swatch } from './Swatch';

export type SwatchGroupProps = {
  type: TBDXSurfaceVariantKey | TBDXAccentVariantKey;
  shades: (TBDXShade | TBDXAlpha)[];
  bordered?: boolean;
};

export const SwatchGroup = (props: SwatchGroupProps) => {
  const { type = 'surface-base', shades = DATA_TBDX_SHADE, bordered } = props;
  return (
    <div className="tbdx-swatch-group">
      {shades.map((value) => (
        <Swatch key={type + value} type={type} shade={value} bordered={bordered} />
      ))}
    </div>
  );
};
