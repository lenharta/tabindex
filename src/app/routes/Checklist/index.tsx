import { Page } from '@/app/components';
import { Text, Title } from '@/common';

export function ChecklistRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Checklist</Title>
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
