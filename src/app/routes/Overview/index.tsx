import { Page } from '@/app/components';
import { Text, Title } from '@/common';

export function OverviewRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Overview</Title>
      </Page.Hero>
      <Page.Content>
        <Text>Content</Text>
      </Page.Content>
    </Page>
  );
}
