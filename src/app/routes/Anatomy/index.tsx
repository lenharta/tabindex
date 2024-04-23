import { Page } from '@/app/components';
import { Anatomy } from '@/app/anatomy';
import { Text, Title } from '@/common';

export function AnatomyRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Anatomy</Title>
      </Page.Hero>
      <Page.Content>
        <Page.Section>
          <Anatomy>
            <Anatomy.Label />
            <Anatomy.Button />
          </Anatomy>
        </Page.Section>
      </Page.Content>
    </Page>
  );
}
