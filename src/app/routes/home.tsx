import { Title, LinkGroup, Link } from '@/components/common';
import { Page } from '../common';

export const Home = () => (
  <Page>
    <Page.Hero title="Landing" />
    <Page.Content>
      <Title>Directory</Title>
      <LinkGroup orientation="vertical">
        <Link to="/toolbox" label="Go to Toolbox" />
        <Link to="/sandbox" label="Go to Sandbox" />
      </LinkGroup>
    </Page.Content>
  </Page>
);
