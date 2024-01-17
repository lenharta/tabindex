import { Page } from '@/app/layouts';
import { InlineInput } from '@/common/InlineInput';
import { Text } from '@/common/Unstyled/Text/Text';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <span>Content Here</span>
        <Text>Span Text</Text>
        <Text span>Span Text</Text>
        <InlineInput id="inline-input-id" label="Input Label" text="Input Note">
          [X]
        </InlineInput>
      </Page.Content>
    </Page>
  );
};
