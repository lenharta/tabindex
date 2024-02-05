import { Page } from '@/app/common';
import { Radio } from '@/components/common';

export const GalleryRadio = () => (
  <>
    <Page.Hero title="Radio Gallery" />
    <Page.Content>
      <div>
        <Radio label="Radio Label" accent="orange" />
        <Radio label="Radio Label" accent="yellow" />
        <Radio label="Radio Label" accent="green" />
      </div>
      <div>
        <Radio label="Radio Label" accent="cyan" />
        <Radio label="Radio Label" accent="blue" />
        <Radio label="Radio Label" accent="indigo" />
      </div>
      <div>
        <Radio label="Radio Label" accent="purple" />
        <Radio label="Radio Label" accent="violet" />
        <Radio label="Radio Label" accent="magenta" />
      </div>
      <div>
        <Radio label="Radio Label" accent="pink" />
        <Radio label="Radio Label" accent="red" />
      </div>
    </Page.Content>
  </>
);
