import { Text, Title } from '@/common';
import { Page } from '@/components';

function GuideBoard() {
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Guide</Title>} />
      <Page.Main>
        <section>
          <Title as="h2">Topics</Title>
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

GuideBoard.displayName = 'Routes.Guide.Board';
export { GuideBoard };
