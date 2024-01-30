import { Page, SwatchGallery } from '@/app/common';
import { Link } from '@/components/common';

const SurfaceGalleryBase = () => (
  <SwatchGallery
    title="Surface Tokens (base)"
    types={['surface-base', 'surface-invert']}
    shades={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
  />
);

const SurfaceGalleryInteractive = () => (
  <SwatchGallery
    title="Surface Tokens (interactive)"
    types={['surface-base-interactive', 'surface-invert-interactive']}
    shades={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
  />
);

export const SurfaceGallery = () => (
  <>
    <Page.Hero title="Surface Gallery" />
    <Page.Content>
      <Link to="/toolbox" label="Back to Overview" />
      <SurfaceGalleryBase />
      <SurfaceGalleryInteractive />
    </Page.Content>
  </>
);
