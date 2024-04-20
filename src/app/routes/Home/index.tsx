import { Page } from '@/app/components';
import { Button, Text, Title } from '@/common';

export function Home() {
  return (
    <Page>
      <section className="hero">
        <Title>Home</Title>
      </section>
      <Page.Content>
        <Text>Content</Text>
        <div style={{ display: 'grid' }}>
          <Button size="xs">Button</Button>
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="lg">Button</Button>
          <Button size="xl">Button</Button>
        </div>
      </Page.Content>
    </Page>
  );
}
