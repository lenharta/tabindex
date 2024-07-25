import { Page } from '@/common';

function Guide(): JSX.Element {
  return (
    <Page>
      <Page.Hero title={<h1>Guide</h1>} />
      <Page.Main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur iste maxime
          mollitia aspernatur adipisci a assumenda temporibus? Sed animi, eaque mollitia impedit
          aliquam iste itaque architecto totam ratione natus.
        </p>
      </Page.Main>
    </Page>
  );
}

Guide.displayName = 'Route.Guide';
export { Guide };
