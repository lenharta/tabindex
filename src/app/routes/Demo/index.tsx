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

// ========== Input
// Tag
// Pill
// File
// Text
// Chip
// Radio
// Select
// Textarea
// Password
// Checkbox
// Combobox
// Fieldset
// Control
// Number
// Rating
// Switch
// Slider
// Pin

// ========== Combobox
// Autocomplete
// Combobox
// Select
// MultiSelect
// Pill
// Tag

// ========== Buttons
// Action
// Button
// Toggle
// Close
// Copy
// File

// ========== Navigation
// Anchor
// Breadcrumb
// Burger
// Link
// Pagination
// Stepper
// Tabs

// ========== Feedback
// Alert
// Loader
// Notification
// Progress
// Skeleton

// ========== Overlays
// Modal
// Dialog
// Drawer
// Loading
// Tooltip

// ========== Layout
// Accordion
// Overlay
// Divider
// Group
// Stack
// Card
// Menu

// ========== Media
// BackgroundImage
// Indicator
// Spoiler
// Avatar
// Image
// Icon

// ========== Data
// Timeline
// Swatch
// Table
// Badge
// List
// Code
// Kbd

// ========== Typography
// Highlight
// Blockquote
// Heading
// Text
// Mark

export const SearchData = [
  {
    title: 'Accordion',
    description: `An accordion is a list of headers that hide or reveal additional content when selected.`,
  },
  {
    title: 'Alert',
    description: `An alert keeps users informed of important and sometimes time-sensitive changes.`,
  },
  {
    title: 'Banner',
    description: `Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.`,
  },
  {
    title: 'Breadcrumb',
    description: `Breadcrumbs provide secondary navigation to help users understand where they are in a website.`,
  },
  {
    title: 'Button',
    description: `A button draws attention to important actions with a large selectable surface.`,
  },
  {
    title: 'Card',
    description: `Cards contain content and actions about a single subject.`,
  },
  {
    title: 'Checkbox',
    description: `Checkboxes allow users to select one or more options from a list.`,
  },
  {
    title: 'Collection',
    description: `A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.`,
  },
  {
    title: 'Combobox',
    description: `A combo box helps users select an item from a large list of options.`,
  },
  {
    title: 'Date',
    description: `A date picker helps users select a single date.`,
  },
  {
    title: 'File',
    description: `File input allows users to attach one or multiple files.`,
  },
  {
    title: 'Footer',
    description: `A footer serves site visitors who arrive at the bottom of a page without finding what they want.`,
  },
  {
    title: 'Form',
    description: `A form allows users to enter information into a page.`,
  },
  {
    title: 'Header',
    description: `A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.`,
  },
  {
    title: 'Icon',
    description: `Icons help communicate meaning, actions, status, or feedback.`,
  },
  {
    title: 'Link',
    description: `A link connects users to a different page or further information.`,
  },
  {
    title: 'List',
    description: `A list organizes information into discrete sequential sections.`,
  },
  {
    title: 'Modal',
    description: `A modal disables page content and focuses the user\u2019s attention on a single task or message.`,
  },
  {
    title: 'Pagination',
    description: `Pagination is navigation for paginated content.`,
  },
  {
    title: 'Timeline',
    description: `A process list displays the steps or stages of important instructions or processes.`,
  },
  {
    title: 'Prose',
    description: `Format a block of running text.`,
  },
  {
    title: 'Radio',
    description: `Radio buttons allow users to select exactly one choice from a group.`,
  },
  {
    title: 'Slider',
    description: `A range slider allows users to choose an approximate number from a range.`,
  },
  {
    title: 'Searchbox',
    description: `Search allows users to search for specific content if they know what search terms to use or can\u2019t find desired content in the main navigation`,
  },
  {
    title: 'Select',
    description: `A select component allows users to choose one option from a temporary modal menu.`,
  },
  {
    title: 'Navigation',
    description: `Hierarchical, vertical navigation to place at the side of a page.`,
  },
  {
    title: 'Steps',
    description: `A step indicator updates users on their progress through a multi-step process.`,
  },
  {
    title: 'Summary',
    description: `A summary box highlights key information from a longer page or displays next steps.`,
  },
  {
    title: 'Table',
    description: `A table shows information in columns and rows.`,
  },
  {
    title: 'Tag',
    description: `A tag draws attention to new or categorized content elements.`,
  },
  {
    title: 'Textbox',
    description: `A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.`,
  },
  {
    title: 'Time',
    description: `A time picker helps users select a specific time.`,
  },
  {
    title: 'Tooltip',
    description: `A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.`,
  },
  {
    title: 'Typography',
    description: `Websites need clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. Our default typefaces are designed for legibility and can adapt to a variety of visual tones.`,
  },
  {
    title: 'Validation',
    description: `Stating validation requirements up front, with live feedback, means users won\u2019t be left guessing.`,
  },
];

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
