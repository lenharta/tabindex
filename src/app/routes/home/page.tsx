import { Page } from '@/app/layouts';
import { Button } from '@/common/Button';

export function Home() {
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <p>Some content here.</p>
        <Button>Button</Button>
      </Page.Content>
    </Page>
  );
}
