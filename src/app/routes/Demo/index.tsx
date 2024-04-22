import { Page } from '@/app/components';
import { Button, Text, Title } from '@/common';
import { ButtonGroup } from '@/common/Button/Group';
import { Divider } from '@/common/Divider';
import { Link } from '@/common/Link';

const SearchData = [
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
  { title: 'Card', description: `Cards contain content and actions about a single subject.` },
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
  { title: 'Date', description: `A date picker helps users select a single date.` },
  {
    title: 'Date Range',
    description: `A date range picker helps users select a range between two dates.`,
  },
  { title: 'File Drop', description: `File input allows users to attach one or multiple files.` },
  {
    title: 'Footer',
    description: `A footer serves site visitors who arrive at the bottom of a page without finding what they want.`,
  },
  { title: 'Form', description: `A form allows users to enter information into a page.` },
  {
    title: 'Header',
    description: `A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.`,
  },
  { title: 'Icon', description: `Icons help communicate meaning, actions, status, or feedback.` },
  {
    title: 'Link',
    description: `A link connects users to a different page or further information.`,
  },
  { title: 'List', description: `A list organizes information into discrete sequential sections.` },
  {
    title: 'Modal',
    description: `A modal disables page content and focuses the user\u2019s attention on a single task or message.`,
  },
  { title: 'Pagination', description: `Pagination is navigation for paginated content.` },
  {
    title: 'Timeline',
    description: `A process list displays the steps or stages of important instructions or processes.`,
  },
  { title: 'Prose', description: `Format a block of running text.` },
  {
    title: 'Radio Button',
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
    title: 'Side Navigation',
    description: `Hierarchical, vertical navigation to place at the side of a page.`,
  },
  { title: 'Site Alert', description: `A site alert communicates urgent sitewide information.` },
  {
    title: 'Step Indicator',
    description: `A step indicator updates users on their progress through a multi-step process.`,
  },
  {
    title: 'Summary',
    description: `A summary box highlights key information from a longer page or displays next steps.`,
  },
  { title: 'Table', description: `A table shows information in columns and rows.` },
  { title: 'Tag', description: `A tag draws attention to new or categorized content elements.` },
  {
    title: 'Textbox',
    description: `A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.`,
  },
  { title: 'Time', description: `A time picker helps users select a specific time.` },
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

const BasicCardRequirements = () => (
  <section className="sec">
    <Title>Basic Card</Title>
    <ul>
      <li>Focus indicators for all elements that need to be highlighted.</li>
      <li>
        Every <code>{`<img>`}</code> you add to your site needs to have an alt attribute. If the
        image is informational, set the alt equal to a descriptive alternative for that image.
      </li>
      <li>
        If the image is decorative or redundant to adjacent text, set <code>alt=""</code>, which
        conveys to assistive technology users that the image isn{'\u2019'}t necessary for
        understanding the page.
      </li>
      <li>
        Avoid using generic strings like photo, image, or icon as alt values, as they don{'\u2019'}t
        communicate valuable content to the user. Be as descriptive as possible.
      </li>
      <li>
        You can add <code>class="visuallyhidden"</code> with descriptive text to give more context
        to a button or link's purpose.
      </li>
    </ul>
    <Text></Text>
  </section>
);

const BasicCardRequirements2 = () => {
  return (
    <section className="sec">
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
    </section>
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

export function Demo() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <BasicCardRequirements2 />
        {/* <BasicCardRequirements /> */}
        {/* <DemoDivider /> */}
        {/* <DemoLinkGroupHorizontal /> */}
        {/* <DemoLinkGroupVertical /> */}
      </Page.Content>
    </Page>
  );
}
