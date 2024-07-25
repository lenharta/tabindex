import { A11Y } from '@/types';
import { Page } from '@/components';
import { Snippet } from '@/common';

export const DEFAULT_BASIC_CARD_IMAGE: A11Y.CardProps['image'] = {
  alt: 'placeholder image with pixel size displayed',
  src: 'https://placehold.co/600x400',
};

export const DEFAULT_BASIC_CARD_LINK: A11Y.CardProps['link'] = {
  label: 'Descriptive Label',
  href: 'https://example.com',
};

export const DEFAULT_BASIC_CARD: A11Y.CardProps = {
  image: DEFAULT_BASIC_CARD_IMAGE,
  link: DEFAULT_BASIC_CARD_LINK,
};

export function DemoBasicCard(props: A11Y.CardProps) {
  const { image, link } = props;
  return (
    <section className="card card--basic">
      <div className="card-layout">
        <img className="card-image" src={image.src} alt={image.alt} />
        <div className="card-overlay">
          <a className="card-link" href={link.href}>
            {link.label}
          </a>
        </div>
      </div>
    </section>
  );
}

const SAMPLE_CODE_BASIC_CARD = `\nexport function DemoBasicCard(props: A11Y.CardProps) {\n  const { image, link } = props;\n  return (\n    <section className=\"card card--basic\">\n      <div className=\"card-layout\">\n        <img className=\"card-image\" src={image.src} alt={image.alt} />\n        <div className=\"card-overlay\">\n          <a className=\"card-link\" href={link.href}>\n            {link.label}\n          </a>\n        </div>\n      </div>\n    </section>\n  );\n}\n`;

function Home(): JSX.Element {
  return (
    <Page>
      <Page.Hero title={<h1>Home</h1>} />
      <Page.Main>
        <section>
          <Snippet code={SAMPLE_CODE_BASIC_CARD} lang="jsx" />
        </section>
        <section>
          <p className="fz-body--xs w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body--sm w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body--md w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body--lg w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body--xl w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
        </section>
      </Page.Main>
    </Page>
  );
}

Home.displayName = 'Route.Home';
export { Home };
