import { Page } from '@/app/common';
import { Checkbox, CheckboxGroup } from '@/components/common';

export const GalleryCheckbox = () => (
  <>
    <Page.Hero title="Checkbox Gallery" />
    <Page.Content>
      <CheckboxGroup label="Group A" accent="blue">
        <Checkbox label="Checkbox #1" />
        <Checkbox label="Checkbox #2" />
        <Checkbox label="Checkbox #3" accent="green" />
      </CheckboxGroup>
      <CheckboxGroup label="Group B">
        <Checkbox label="Checkbox #1" />
        <Checkbox label="Checkbox #2" />
        <Checkbox label="Checkbox #3" />
      </CheckboxGroup>
      <CheckboxGroup label="Group C">
        <Checkbox label="Checkbox #1" />
        <Checkbox label="Checkbox #2" />
        <Checkbox label="Checkbox #3" />
      </CheckboxGroup>
    </Page.Content>
  </>
);
