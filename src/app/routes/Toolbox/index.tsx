import { Page } from '@/components/layouts';
import { Title } from '@/components/common';
import { IconGallery } from '@/components/common/Icon';

export default function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Toolbox" />
      <Page.Content>
        <IconGallery />
        <Title h3>Title Component</Title>
      </Page.Content>
    </Page>
  );
}
