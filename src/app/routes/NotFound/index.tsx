import { Link } from 'react-router-dom';
import { Page } from '@/components/layouts';

const notFoundContent = (
  <section>
    <p>Sorry, we had trouble find that for you.</p>
    <p>
      Please reload the page -or- <Link to="/">Go Home</Link>
    </p>
  </section>
);

export default function NotFound() {
  return (
    <Page>
      <Page.Hero headline="[ERROR-404]: Page Not Found." />
      <Page.Content></Page.Content>
      <Page.Footer />
    </Page>
  );
}
