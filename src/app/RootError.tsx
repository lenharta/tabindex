import { Link } from 'react-router-dom';
import { Page } from '@/app/layouts';

export function RootError() {
  return (
    <Page>
      <Page.Hero title="404 Page Not Found" />
      <Page.Content>
        <section>
          <p>Sorry we had trouble finding that.</p>
          <div>
            <Link to="/">Go Home</Link>
          </div>
        </section>
      </Page.Content>
    </Page>
  );
}
