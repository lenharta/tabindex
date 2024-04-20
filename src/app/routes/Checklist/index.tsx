import { Text, Title } from '@/common';
import { Page } from '@/app/components';

export function Checklist() {
  return (
    <Page>
      <section className="hero">
        <Title>Checklist</Title>
      </section>
      <Page.Content>
        <Text>Content</Text>
      </Page.Content>
    </Page>
  );
}
