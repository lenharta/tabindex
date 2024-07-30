import { Page } from '@/common';
import { Text, Title } from '@/core';
import * as Router from 'react-router-dom';

function Error(): JSX.Element {
  const homeLink = <Router.Link to="/">Go Home</Router.Link>;
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Error 404</Title>} />
      <Page.Main>
        <Text>Unable to load page. Try refreshing -or- {homeLink}</Text>
      </Page.Main>
    </Page>
  );
}

Error.displayName = 'Routes.Error';
export { Error };
