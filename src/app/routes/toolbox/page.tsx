import * as React from 'react';
import { Page } from '@/app/layouts';

import { Radio } from '@/common/Radio';
import { Switch } from '@/common/Switch';
import { Checkbox } from '@/common/Checkbox';

const DemoRadio = () => {
  return (
    <div>
      <Radio label="Radio" />
    </div>
  );
};

const DemoSwitch = () => {
  return (
    <div>
      <Switch label="Switch" />
    </div>
  );
};

const DemoCheckbox = () => {
  return (
    <div>
      <Checkbox label="Checkbox" />
    </div>
  );
};

const Sandbox = ({}: {}) => {};
const SandboxHeader = ({}: {}) => {};
const SandboxDisplay = ({}: {}) => {};
const SandboxControls = ({}: {}) => {};

const Demobox = () => {
  const [value, setValue] = React.useState(false);
  return (
    <div>
      <DemoRadio />
      <DemoSwitch />
      <DemoCheckbox />
    </div>
  );
};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <section>
          <Demobox />
        </section>
      </Page.Content>
    </Page>
  );
};
