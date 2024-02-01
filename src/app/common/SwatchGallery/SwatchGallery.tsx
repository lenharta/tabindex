import { type TBDX, DATA_TBDX_SHADE } from '@/core/theme';
import { SwatchGroup } from './SwatchGroup';
import { Title } from '@/components/common';

export type SwatchGalleryProps = {
  title?: string;
  types: (TBDX.SurfaceVariantKey | TBDX.AccentVariantKey)[];
  shades: (TBDX.Shade | TBDX.Alpha)[];
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
