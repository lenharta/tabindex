import { Page } from '@/app/layouts';
import { Checkbox } from '@/common/Checkbox';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Checkbox />
      </Page.Content>
    </Page>
  );
};
