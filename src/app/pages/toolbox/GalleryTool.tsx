import { Page } from '@/app/common';
import { Tool } from '@/components/common';

export const GalleryTool = () => (
  <>
    <Page.Hero title="Tool Gallery" />
    <Page.Content>
      <div>
        <Tool size="xs" icon="dismiss_circle" />
        <Tool size="xs" icon="dismiss_circle_filled" />
        <Tool size="xs" icon="moon" />
        <Tool size="xs" icon="moon_filled" />
        <Tool size="xs" icon="sun" />
        <Tool size="xs" icon="sun_filled" />
      </div>
      <div>
        <Tool size="sm" icon="dismiss_circle" />
        <Tool size="sm" icon="dismiss_circle_filled" />
        <Tool size="sm" icon="moon" />
        <Tool size="sm" icon="moon_filled" />
        <Tool size="sm" icon="sun" />
        <Tool size="sm" icon="sun_filled" />
      </div>
      <div>
        <Tool size="md" icon="dismiss_circle" />
        <Tool size="md" icon="dismiss_circle_filled" />
        <Tool size="md" icon="moon" />
        <Tool size="md" icon="moon_filled" />
        <Tool size="md" icon="sun" />
        <Tool size="md" icon="sun_filled" />
      </div>
      <div>
        <Tool size="lg" icon="dismiss_circle" />
        <Tool size="lg" icon="dismiss_circle_filled" />
        <Tool size="lg" icon="moon" />
        <Tool size="lg" icon="moon_filled" />
        <Tool size="lg" icon="sun" />
        <Tool size="lg" icon="sun_filled" />
      </div>
      <div>
        <Tool size="xl" icon="dismiss_circle" />
        <Tool size="xl" icon="dismiss_circle_filled" />
        <Tool size="xl" icon="moon" />
        <Tool size="xl" icon="moon_filled" />
        <Tool size="xl" icon="sun" />
        <Tool size="xl" icon="sun_filled" />
      </div>
    </Page.Content>
  </>
);
