import { Page } from '@/app/common';
import { Checkbox, CheckboxGroup } from '@/components/common';

export const GalleryCheckbox = () => (
  <>
    <Page.Hero title="Checkbox Gallery" />
    <Page.Content>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '25% 25% 25%' }}>
        <CheckboxGroup label="Group A" accent="blue">
          <Checkbox label="Checkbox #1" size="xs" />
          <Checkbox label="Checkbox #2" size="xs" />
          <Checkbox label="Checkbox #3" size="xs" />
        </CheckboxGroup>
        <CheckboxGroup label="Group B">
          <Checkbox label="Checkbox #1" size="sm" />
          <Checkbox label="Checkbox #2" size="sm" />
          <Checkbox label="Checkbox #3" size="sm" />
        </CheckboxGroup>
        <CheckboxGroup label="Group C">
          <Checkbox label="Checkbox #1" size="md" />
          <Checkbox label="Checkbox #2" size="md" />
          <Checkbox label="Checkbox #3" size="md" />
        </CheckboxGroup>
        <CheckboxGroup label="Group D">
          <Checkbox label="Checkbox #1" size="lg" />
          <Checkbox label="Checkbox #2" size="lg" />
          <Checkbox label="Checkbox #3" size="lg" />
        </CheckboxGroup>
        <CheckboxGroup label="Group E">
          <Checkbox label="Checkbox #1" size="xl" />
          <Checkbox label="Checkbox #2" size="xl" />
          <Checkbox label="Checkbox #3" size="xl" />
        </CheckboxGroup>
      </div>
    </Page.Content>
  </>
);
