import { Page } from '@/app/common';
import { Link } from 'react-router-dom';

export const RootError = () => (
  <Page>
    <Page.Hero title="[ERROR 404]: Page Not Found" />
    <Page.Content>
      <Link to="/">Go Home</Link>
    </Page.Content>
  </Page>
);
