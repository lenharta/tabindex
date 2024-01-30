import { Page } from '@/app/common';
import { Link, LinkGroup } from '@/components/common';

export const ToolboxOverview = () => (
  <>
    <Page.Hero title="Toolbox" />
    <Page.Content>
      <LinkGroup orientation="vertical">
        <Link to="/" label="Go Home" />
        <Link to="/toolbox/accent" label="Accent Colors" />
        <Link to="/toolbox/surface" label="Surface Colors" />
      </LinkGroup>
    </Page.Content>
  </>
);
