import { Page } from '@/components/layouts';

export default function Home() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Home" />
      <Page.Content>
        <span>Content</span>
      </Page.Content>
    </Page>
  );
}
