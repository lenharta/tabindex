import { Page } from '@/app/components';

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
