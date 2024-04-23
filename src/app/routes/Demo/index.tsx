import { Page } from '@/app/components';
import { Button, Text, Title } from '@/common';
import { ButtonGroup } from '@/common/Button/Group';
import { Divider } from '@/common/Divider';
import { Link } from '@/common/Link';

interface ComponentData {
  id: string;
  name: string;
  summary: string;
}

export const componentDataInput: ComponentData[] = [
  { id: 'element-tag', name: 'Tag', summary: `` },
  { id: 'element-pill', name: 'Pill', summary: `` },
  { id: 'element-file', name: 'File', summary: `` },
  { id: 'element-text', name: 'Text', summary: `` },
  { id: 'element-chip', name: 'Chip', summary: `` },
  { id: 'element-radio', name: 'Radio', summary: `` },
  { id: 'element-select', name: 'Select', summary: `` },
  { id: 'element-textarea', name: 'Textarea', summary: `` },
  { id: 'element-password', name: 'Password', summary: `` },
  { id: 'element-checkbox', name: 'Checkbox', summary: `` },
  { id: 'element-combobox', name: 'Combobox', summary: `` },
  { id: 'element-fieldset', name: 'Fieldset', summary: `` },
  { id: 'element-control', name: 'Control', summary: `` },
  { id: 'element-number', name: 'Number', summary: `` },
  { id: 'element-rating', name: 'Rating', summary: `` },
  { id: 'element-switch', name: 'Switch', summary: `` },
  { id: 'element-slider', name: 'Slider', summary: `` },
  { id: 'element-pin', name: 'Pin', summary: `` },
];

export const componentDataButton: ComponentData[] = [
  { id: 'element-action', name: 'Action', summary: `` },
  { id: 'element-button', name: 'Button', summary: `` },
  { id: 'element-toggle', name: 'Toggle', summary: `` },
  { id: 'element-close', name: 'Close', summary: `` },
  { id: 'element-copy', name: 'Copy', summary: `` },
  { id: 'element-file', name: 'File', summary: `` },
];

export const componentDataCombobox: ComponentData[] = [
  { id: 'element-autocomplete', name: 'Autocomplete', summary: `` },
  { id: 'element-multiselect', name: 'MultiSelect', summary: `` },
  { id: 'element-combobox', name: 'Combobox', summary: `` },
  { id: 'element-select', name: 'Select', summary: `` },
  { id: 'element-pill', name: 'Pill', summary: `` },
  { id: 'element-tag', name: 'Tag', summary: `` },
];

export const componentDataNavigation: ComponentData[] = [
  { id: 'element-pagination', name: 'Pagination', summary: `` },
  { id: 'element-breadcrumb', name: 'Breadcrumb', summary: `` },
  { id: 'element-stepper', name: 'Stepper', summary: `` },
  { id: 'element-anchor', name: 'Anchor', summary: `` },
  { id: 'element-burger', name: 'Burger', summary: `` },
  { id: 'element-link', name: 'Link', summary: `` },
  { id: 'element-tabs', name: 'Tabs', summary: `` },
];

export const componentDataTypography: ComponentData[] = [
  { id: 'element-blockquote', name: 'Blockquote', summary: `` },
  { id: 'element-highlight', name: 'Highlight', summary: `` },
  { id: 'element-heading', name: 'Heading', summary: `` },
  { id: 'element-text', name: 'Text', summary: `` },
  { id: 'element-mark', name: 'Mark', summary: `` },
];

export const componentDataFeedback: ComponentData[] = [
  { id: 'element-notification', name: 'Notification', summary: `` },
  { id: 'element-progress', name: 'Progress', summary: `` },
  { id: 'element-skeleton', name: 'Skeleton', summary: `` },
  { id: 'element-loader', name: 'Loader', summary: `` },
  { id: 'element-alert', name: 'Alert', summary: `` },
];

export const componentDataData: ComponentData[] = [
  { id: 'element-timeline', name: 'Timeline', summary: `` },
  { id: 'element-swatch', name: 'Swatch', summary: `` },
  { id: 'element-table', name: 'Table', summary: `` },
  { id: 'element-badge', name: 'Badge', summary: `` },
  { id: 'element-list', name: 'List', summary: `` },
  { id: 'element-code', name: 'Code', summary: `` },
  { id: 'element-kbd', name: 'Kbd', summary: `` },
];

export const componentDataOverlay: ComponentData[] = [
  { id: 'element-modal', name: 'Modal', summary: `` },
  { id: 'element-dialog', name: 'Dialog', summary: `` },
  { id: 'element-drawer', name: 'Drawer', summary: `` },
  { id: 'element-loading', name: 'Loading', summary: `` },
  { id: 'element-tooltip', name: 'Tooltip', summary: `` },
];

export const componentDataLayout: ComponentData[] = [
  { id: 'element-accordion', name: 'Accordion', summary: `` },
  { id: 'element-overlay', name: 'Overlay', summary: `` },
  { id: 'element-divider', name: 'Divider', summary: `` },
  { id: 'element-group', name: 'Group', summary: `` },
  { id: 'element-stack', name: 'Stack', summary: `` },
  { id: 'element-card', name: 'Card', summary: `` },
  { id: 'element-menu', name: 'Menu', summary: `` },
];

export const componentDataMedia: ComponentData[] = [
  { id: 'element-backgroundimage', name: 'BackgroundImage', summary: `` },
  { id: 'element-indicator', name: 'Indicator', summary: `` },
  { id: 'element-spoiler', name: 'Spoiler', summary: `` },
  { id: 'element-avatar', name: 'Avatar', summary: `` },
  { id: 'element-image', name: 'Image', summary: `` },
  { id: 'element-icon', name: 'Icon', summary: `` },
];

export const componentData = {
  input: componentDataInput,
  button: componentDataButton,
  combobox: componentDataCombobox,
  navigation: componentDataNavigation,
  typography: componentDataTypography,
  feedback: componentDataFeedback,
  overlay: componentDataOverlay,
  layout: componentDataLayout,
  media: componentDataMedia,
};

const a11yCardRequirements = [
  {
    id: `a11y-card-req-1a`,
    text: `Ensure that all interactive elements within the card can be accessed and activated using only the keyboard. Users should be able to navigate to each interactive element (such as buttons or links) using the <kbd>Tab</kbd> key and activate them using the <kbd>Enter</kbd> key.`,
    title: `Keyboard Accessibility`,
  },
  {
    id: `a11y-card-req-1b`,
    text: ` Provide clear visual indication of focus for keyboard users. When navigating through the card using the keyboard, ensure that the focused element is visually highlighted or outlined so users can easily identify where they are on the card.`,
    title: `Focus Management`,
  },
  {
    id: `a11y-card-req-1c`,
    text: `Use semantic HTML elements appropriately to convey the structure and purpose of the card content. For example, use <code>article</code>, <code>section</code>, <code>header</code>, <code>footer</code>, and <code>aside</code> elements where applicable to provide meaningful structure to the card content.`,
    title: `Semantic HTML`,
  },
  {
    id: `a11y-card-req-1d`,
    text: `Include descriptive text alternatives for non-text content within the card, such as images or icons. Use alt attributes for images to provide concise and descriptive alternative text that conveys the purpose or function of the image.`,
    title: `Text Alternatives`,
  },
  {
    id: `a11y-card-req-1e`,
    text: `Ensure that text and interactive elements within the card have sufficient color contrast against their background to be readable and distinguishable by users with low vision or color vision deficiencies. Follow WCAG (Web Content Accessibility Guidelines) standards for color contrast ratios.`,
    title: `Color Contrast`,
  },
  {
    id: `a11y-card-req-1f`,
    text: `Design the card component to accommodate changes in text size without loss of functionality or readability. Ensure that the card layout remains responsive and adapts gracefully to different text sizes and screen resolutions.`,
    title: `Resizable Text`,
  },
  {
    id: `a11y-card-req-1g`,
    text: `If the card contains form elements, ensure they are accessible to screen readers and keyboard users. Use appropriate form <code>labels</code>, <code>fieldsets</code>, and <code>legends</code> to provide context and instructions for form inputs.`,
    title: `Accessible Forms`,
  },
  {
    id: `a11y-card-req-1h`,
    text: `Use ARIA (Accessible Rich Internet Applications) attributes where necessary to enhance the accessibility of dynamic or interactive elements within the card. For example, use <code>aria-label</code> or <code>aria-labelledby</code> to provide accessible names for interactive elements that are not adequately described by their visible text.`,
    title: `Aria Attributes`,
  },
];

const GroupingListItems = () => (
  <div role="list">
    <div role="presentation">
      <div role="listitem">...</div>
      <div role="listitem">...</div>
    </div>
    <div role="presentation">
      <div role="listitem">...</div>
      <div role="listitem">...</div>
    </div>
  </div>
);

const CardRequirements = () => {
  return (
    <Page.Section>
      <ul className="guide-list">
        {a11yCardRequirements.map((item) => (
          <li key={item.id} className="guide-list-item">
            <span className="guide-copy guide-list-item-title">{item.title}</span>
            <Text
              className="guide-copy guide-list-item-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </li>
        ))}
      </ul>
    </Page.Section>
  );
};

export const DemoLinkGroupHorizontal = () => {
  return (
    <div className="demo">
      <Link.Group orientation="horizontal">
        <Link>Link Item #1</Link>
        <Link>Link Item #2</Link>
        <Link>Link Item #3</Link>
        <Link>Link Item #4</Link>
        <Link>Link Item #5</Link>
      </Link.Group>
    </div>
  );
};

export const DemoLinkGroupVertical = () => {
  return (
    <div className="demo">
      <Link.Group orientation="vertical">
        <Link>Link Item #1</Link>
        <Link>Link Item #2</Link>
        <Link>Link Item #3</Link>
        <Link>Link Item #4</Link>
        <Link>Link Item #5</Link>
      </Link.Group>
    </div>
  );
};

export const DemoButtonGroup = () => {
  return (
    <ButtonGroup size="xl">
      <Button size="xs" theme="default">
        Button XS
      </Button>
      <Button size="sm" theme="default">
        Button SM
      </Button>
      <Button size="md" theme="default">
        Button MD
      </Button>
      <Button size="lg" theme="default">
        Button LG
      </Button>
      <Button size="xl" theme="default">
        Button XL
      </Button>
    </ButtonGroup>
  );
};

export const DemoDivider = () => {
  return (
    <div className="demo">
      <ul className="demo-list">
        <Divider label="Some Text Label" />
        <li className="demo-list-item">Item #1</li>
        <li className="demo-list-item">Item #2</li>
        <li className="demo-list-item">Item #3</li>
        <Divider label="Label" />
        <li className="demo-list-item">Item #4</li>
        <li className="demo-list-item">Item #5</li>
        <li className="demo-list-item">Item #6</li>
      </ul>
    </div>
  );
};

export function DemoRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <CardRequirements />
      </Page.Content>
    </Page>
  );
}
