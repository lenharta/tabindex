import { Page } from '@/common';
import { Text, Title } from '@/core';

function Home(): JSX.Element {
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Home</Title>} />
      <Page.Main>
        <section>
          <Title as="h2">Section</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur iste
            maxime mollitia aspernatur adipisci a assumenda temporibus? Sed animi, eaque mollitia
            impedit aliquam iste itaque architecto totam ratione natus.
          </Text>
        </section>
      </Page.Main>
    </Page>
  );
}

Home.displayName = 'Route.Home';
export { Home };
