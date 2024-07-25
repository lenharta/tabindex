import { Page } from '@/common';

function WireIcon() {
  return <div className="tbx-wf-icon" />;
}

function WireLabel() {
  return <div className="tbx-wf-label" />;
}

function WireButton() {
  return (
    <div className="tbx-wf-button" tabIndex={0}>
      <WireLabel />
      <WireIcon />
    </div>
  );
}

function WireButtonGroup(props: { items: string[] }) {
  return (
    <div className="tbx-wf-button-group">
      {props.items.map((item) => (
        <WireButton key={item} />
      ))}
    </div>
  );
}

function Home(): JSX.Element {
  return (
    <Page>
      <Page.Hero title={<h1>Home</h1>} />
      <Page.Main>
        <section>
          <WireButtonGroup items={['button:1', 'button:2']} />
          <p className="fz-body-xs w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body-sm w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body-md w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body-lg w-max-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam, amet velit
            voluptate perferendis nulla explicabo et unde eveniet deserunt fugit ipsum quaerat illo
            ipsa? At, itaque dolore? Eveniet, accusantium.
          </p>
          <p className="fz-body-xl w-max-600">
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
