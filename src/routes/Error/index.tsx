import * as Router from 'react-router-dom';
import { Page } from '@/components';

function Error(): JSX.Element {
  const homeLink = <Router.Link to="/">Go Home</Router.Link>;
  return (
    <Page>
      <Page.Hero title={<h1>Error 404</h1>} />
      <Page.Main>
        <p>Unable to load page. Try refreshing -or- {homeLink}</p>
      </Page.Main>
    </Page>
  );
}

Error.displayName = 'Routes.Error';
export { Error };
