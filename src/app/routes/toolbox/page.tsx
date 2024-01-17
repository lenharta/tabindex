import { Page } from '@/app/layouts';
import { Text } from '@/common/Unstyled/Text/Text';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <span>Content Here</span>
        <Text>Span Text</Text>
        <Text span>Span Text</Text>
      </Page.Content>
    </Page>
  );
};
