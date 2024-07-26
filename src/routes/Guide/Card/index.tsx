import { Page } from '@/components';
import { Text, Title } from '@/common';

function GuideCard() {
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Guide | Card</Title>} />
      <Page.Main>
        <section className="guide-overview">
          <Title as="h2">Overview</Title>
          <Text>
            A card serves as a concise representation of a larger concept, acting as a gateway to
            more comprehensive information. This summary can include diverse content types such as
            text, images, multimedia, buttons, and links.
          </Text>
          <Text>
            Typically, an individual card is part of a collection of similar cards, rather than
            existing in isolation. Each card is distinguished by its unique content, while cards as
            a whole stand out from the broader page context through distinct visual elements like
            borders or shadows.
          </Text>
          <Text>
            Cards are inherently modular, allowing you to rearrange them within a collection without
            altering the meaning of any individual card.
          </Text>
        </section>

        <section className="guide-preview">
          <Title as="h2">Preview</Title>
        </section>
      </Page.Main>
    </Page>
  );
}

GuideCard.displayName = 'Routes.Guide.Card';
export { GuideCard };
