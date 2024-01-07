import { Page } from '@/app/layouts';
import { Link } from 'react-router-dom';

export function RootError() {
  return (
    <Page>
      <Page.Hero title="Page Not Found" />
      <Page.Content>
        <section>
          <p>Sorry we had trouble finding that.</p>
          <br />
          <Link to="/">Go Home</Link>
        </section>
      </Page.Content>
    </Page>
  );
}
