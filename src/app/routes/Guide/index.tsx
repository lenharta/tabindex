import { Page } from '@/app/components';
import { Text, Title } from '@/common';

export function GuideRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Guide</Title>
      </Page.Hero>
      <Page.Content>
        <Page.Section>
          <Text>Section</Text>
        </Page.Section>
        <Page.Section>
          <Text>Section</Text>
        </Page.Section>
        <Page.Section>
          <Text>Section</Text>
        </Page.Section>
      </Page.Content>
    </Page>
  );
}
