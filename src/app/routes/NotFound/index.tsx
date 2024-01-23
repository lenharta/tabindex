import { Link } from 'react-router-dom';
import { Page } from '@/app/components';

export default function NotFound() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="[ERROR-404]: Page Not Found." />
      <Page.Content>
        <section>
          <p>Sorry, we had trouble find that for you.</p>
          <p>
            Please reload the page -or- <Link to="/">Go Home</Link>
          </p>
        </section>
      </Page.Content>
    </Page>
  );
}
