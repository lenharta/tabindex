import { Page } from '@/app/layouts';
import { Icon } from '@/common/Icon';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <span>Page Content</span>
        <Icon name="square_check" aria-label="checkbox checked icon" />
        <Icon name="square_fill" aria-label="checkbox unchecked icon" />
      </Page.Content>
    </Page>
  );
};
