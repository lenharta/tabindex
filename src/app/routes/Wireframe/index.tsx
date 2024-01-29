import { Page } from '@/components/layouts';
import { AccentAlphaGallery, AccentBaseGallery, SurfaceGallery } from './sections';

export default function Wireframe() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Wireframes" />
      <Page.Content>
        <SurfaceGallery />
        <AccentBaseGallery />
        <AccentAlphaGallery />
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
}
