// import { A11Y } from '@/types';
import { Page } from '@/components';
import { Snippet } from '@/common';

import presidentPortraitLincoln from '@/assets/guide/president-portrait-abraham-lincoln.jpg';
import presidentPortraitRoosevelt from '@/assets/guide/president-portrait-theodore-roosevelt.jpg';
import presidentPortraitJefferson from '@/assets/guide/president-portrait-thomas-jefferson.jpg';
import presidentPortraitWashington from '@/assets/guide/president-portrait-george-washingtion.jpg';

// export const DEFAULT_BASIC_CARD_IMAGE: A11Y.CardProps['image'] = {
//   alt: 'placeholder image with pixel size displayed',
//   src: 'https://placehold.co/600x400',
// };

// export const DEFAULT_BASIC_CARD_LINK: A11Y.CardProps['link'] = {
//   label: 'Descriptive Label',
//   href: 'https://example.com',
// };

// export const DEFAULT_BASIC_CARD: A11Y.CardProps = {
//   image: DEFAULT_BASIC_CARD_IMAGE,
//   link: DEFAULT_BASIC_CARD_LINK,
// };

export function GuideCard() {
  return (
    <section className="guide-card">
      <div className="guide-card-layout">
        <img
          src="https://placehold.co/600x400"
          alt="placeholder image with pixel size displayed"
          className="guide-card-image"
        />
        <div className="guide-card-overlay">
          <a className="guide-card-link" target="_blank" href="https://example.com">
            Card Title
          </a>
        </div>
      </div>
    </section>
  );
}

const DATA_PRESIDENTS_GEORGE_WASHINGTON = {
  src: '../../assets/guide/president-portrait-george-washington.jpg',
  alt: 'George Washington, 1st President of the United States, 1789-1797',
  href: 'https://www.whitehousehistory.org/bios/george-washington',
  title: 'George Washington',
};

const DATA_PRESIDENTS_THOMAS_JEFFERSON = {
  src: '../../assets/guide/president-portrait-thomas-jefferson.jpg',
  alt: 'Thomas Jefferson, 3rd President of the United States, 1801-1809',
  href: 'https://www.whitehousehistory.org/bios/thomas-jefferson',
  title: 'Thomas Jefferson',
};

const DATA_PRESIDENTS_ABRAHAM_LINCOLN = {
  src: '../../assets/guide/president-portrait-abraham-lincoln.jpg',
  alt: 'Abraham Lincoln, 16th President of the United States, 1861-1865',
  href: 'https://www.whitehousehistory.org/bios/abraham-lincoln',
  title: 'Abraham Lincoln',
};

const DATA_PRESIDENTS_THEODORE_ROOSEVELT = {
  src: '../../assets/guide/president-portrait-theodore-roosevelt.jpg',
  alt: 'Theodore Roosevelt, 26th President of the United States, 1901-1909',
  href: 'https://www.whitehousehistory.org/bios/theodore-roosevelt',
  title: 'Theodore Roosevelt',
};

const DATA_PRESIDENTS_RONALD_REAGAN = {
  src: '../../assets/guide/president-portrait-ronald-reagan.jpg',
  alt: 'Ronald Reagan, 40th President of the United States, 1981-1989',
  href: 'https://www.whitehousehistory.org/bios/ronald-reagan',
  title: 'Ronald Reagan',
};

function PresidentCardWashington() {
  return (
    <section className="guide-card">
      <img
        src={presidentPortraitWashington}
        alt="George Washington, 1st President of the United States, 1789-1797"
        className="guide-card-image"
      />
      <div className="guide-card-overlay">
        <a
          href="https://www.whitehousehistory.org/bios/george-washington"
          className="guide-card-link"
          target="_blank"
          rel="noopener"
        >
          George Washington
        </a>
      </div>
    </section>
  );
}

function PresidentCardJefferson() {
  return (
    <section className="guide-card">
      <img
        alt="Thomas Jefferson, 3rd President of the United States, 1801-1809"
        src={presidentPortraitJefferson}
        className="guide-card-image"
      />
      <div className="guide-card-overlay">
        <a
          href="https://www.whitehousehistory.org/bios/thomas-jefferson"
          className="guide-card-link"
          target="_blank"
          rel="noopener"
        >
          Thomas Jefferson
        </a>
      </div>
    </section>
  );
}

function PresidentCardLincoln() {
  return (
    <section className="guide-card">
      <img
        src={presidentPortraitLincoln}
        alt="Abraham Lincoln, 16th President of the United States, 1861-1865"
        className="guide-card-image"
      />
      <div className="guide-card-overlay">
        <a
          href="https://www.whitehousehistory.org/bios/abraham-lincoln"
          className="guide-card-link"
          target="_blank"
          rel="noopener"
        >
          Abraham Lincoln
        </a>
      </div>
    </section>
  );
}

function PresidentCardRoosevelt() {
  return (
    <section className="guide-card">
      <img
        src={presidentPortraitRoosevelt}
        alt="Theodore Roosevelt, 26th President of the United States, 1901-1909"
        className="guide-card-image"
      />
      <div className="guide-card-overlay">
        <a
          href="https://www.whitehousehistory.org/bios/theodore-roosevelt"
          className="guide-card-link"
          target="_blank"
          rel="noopener"
        >
          Theodore Roosevelt
        </a>
      </div>
    </section>
  );
}

const DATA_PRESIDENTS = {
  lincoln: DATA_PRESIDENTS_ABRAHAM_LINCOLN,
  jefferson: DATA_PRESIDENTS_THOMAS_JEFFERSON,
  roosevelt: DATA_PRESIDENTS_THEODORE_ROOSEVELT,
  washington: DATA_PRESIDENTS_GEORGE_WASHINGTON,
};

const CODE_SNIPPET_CARD_GRID = `function CardGrid() {
  return (
    <section className="card-grid">
      <section className="card">
        <img
          src={presidentPortraitJefferson}
          alt="Thomas Jefferson, 3rd President of the United States, 1801-1809"
          className="card-image"
        />
        <div className="card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/thomas-jefferson"
            className="card-link"
            target="_blank"
            rel="noopener"
          >
            Thomas Jefferson
          </a>
        </div>
      </section>

      <section className="card">
        <img
          src={presidentPortraitLincoln}
          alt="Abraham Lincoln, 16th President of the United States, 1861-1865"
          className="card-image"
        />
        <div className="card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/abraham-lincoln"
            className="card-link"
            target="_blank"
            rel="noopener"
          >
            Abraham Lincoln
          </a>
        </div>
      </section>

      <section className="card">
        <img
          src={presidentPortraitRoosevelt}
          alt="Theodore Roosevelt, 26th President of the United States, 1901-1909"
          className="card-image"
        />
        <div className="card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/theodore-roosevelt"
            className="card-link"
            target="_blank"
            rel="noopener"
          >
            Theodore Roosevelt
          </a>
        </div>
      </section>

      <section className="card">
        <img
          src={presidentPortraitWashington}
          alt="George Washington, 1st President of the United States, 1789-1797"
          className="card-image"
        />
        <div className="card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/george-washington"
            className="card-link"
            target="_blank"
            rel="noopener"
          >
            George Washington
          </a>
        </div>
      </section>
    </section>
  )
}`;

const message = ``;

function GuideCardGrid() {
  return (
    <section className="guide-card-grid">
      <section className="guide-card">
        <img
          src="../../assets/president-portrait-thomas-jefferson.jpg"
          alt="Thomas Jefferson, 3rd President of the United States, 1801-1809"
          className="guide-card-image"
        />
        <div className="guide-card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/thomas-jefferson"
            className="guide-card-link"
            target="_blank"
            rel="noopener"
          >
            Thomas Jefferson
          </a>
        </div>
      </section>

      <section className="guide-card">
        <img
          src="../../assets/president-portrait-abraham-lincoln.jpg"
          alt="Abraham Lincoln, 16th President of the United States, 1861-1865"
          className="guide-card-image"
        />
        <div className="guide-card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/abraham-lincoln"
            className="guide-card-link"
            target="_blank"
            rel="noopener"
          >
            Abraham Lincoln
          </a>
        </div>
      </section>

      <section className="guide-card">
        <img
          src="../../assets/president-portrait-theodore-roosevelt.jpg"
          alt="Theodore Roosevelt, 26th President of the United States, 1901-1909"
          className="guide-card-image"
        />
        <div className="guide-card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/theodore-roosevelt"
            className="guide-card-link"
            target="_blank"
            rel="noopener"
          >
            Theodore Roosevelt
          </a>
        </div>
      </section>

      <section className="guide-card">
        <img
          src="../../assets/president-portrait-george-washington.jpg"
          alt="George Washington, 1st President of the United States, 1789-1797"
          className="guide-card-image"
        />
        <div className="guide-card-overlay">
          <a
            href="https://www.whitehousehistory.org/bios/george-washington"
            className="guide-card-link"
            target="_blank"
            rel="noopener"
          >
            George Washington
          </a>
        </div>
      </section>
    </section>
  );
}

function Home(): JSX.Element {
  return (
    <Page>
      <Page.Hero title={<h1>Home</h1>} />
      <Page.Main>
        <section>
          <GuideCardGrid />
          <Snippet code={CODE_SNIPPET_CARD_GRID} lang="tsx" />
        </section>
      </Page.Main>
    </Page>
  );
}

Home.displayName = 'Route.Home';
export { Home };
