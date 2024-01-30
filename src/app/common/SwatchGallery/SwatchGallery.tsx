import {
  DATA_TBDX_SHADE,
  type TBDXAlpha,
  type TBDXShade,
  type TBDXAccentVariantKey,
  type TBDXSurfaceVariantKey,
} from '@/core/theme';

import { Title } from '@/components/common';
import { SwatchGroup } from './SwatchGroup';

export type SwatchGalleryProps = {
  title?: string;
  types: (TBDXSurfaceVariantKey | TBDXAccentVariantKey)[];
  shades: (TBDXShade | TBDXAlpha)[];
  bordered?: boolean;
};

export const SwatchGallery = (props: SwatchGalleryProps) => {
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
          <SwatchGroup key={type} type={type} shades={shades} bordered={bordered} />
        ))}
      </div>
    </div>
  );
};
