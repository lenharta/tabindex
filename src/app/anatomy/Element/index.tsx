import clsx from 'clsx';
import React from 'react';
import { STORE, TBDX } from '@/types';
import { mergeProps } from '@/common/utils';
import { PlusIcon } from '@radix-ui/react-icons';
import { Text } from '@/common';

interface AnatomyElementData {
  id: string;
  name: string;
  summary: string;
}

export type AnatomyElementKey = 'Box' | 'Item' | 'Label' | 'Button' | 'Link';

// | 'Pin'
// | 'Tag'
// | 'Kbd'
// | 'Code'
// | 'List'
// | 'Icon'
// | 'Pill'
// | 'Text'
// | 'Chip'
// | 'Link'
// | 'Tabs'
// | 'Card'
// | 'Menu'
// | 'Modal'
// | 'Image'
// | 'Radio'
// | 'Close'
// | 'Group'
// | 'Stack'
// | 'Label'
// | 'Table'
// | 'TableCell'
// | 'TableRow'
// | 'TableBody'
// | 'TableHead'
// | 'TableHeader'
// | 'Badge'
// | 'Swatch'
// | 'Dialog'
// | 'Drawer'
// | 'Avatar'
// | 'Action'
// | 'Button'
// | 'Toggle'
// | 'Number'
// | 'Rating'
// | 'Switch'
// | 'Slider'
// | 'Select'
// | 'Anchor'
// | 'Burger'
// | 'Option'
// | 'Divider'
// | 'Overlay'
// | 'Spoiler'
// | 'Loading'
// | 'Tooltip'
// | 'Stepper'
// | 'Control'
// | 'Heading'
// | 'TextBox'
// | 'Timeline'
// | 'Textarea'
// | 'Checkbox'
// | 'Combobox'
// | 'Fieldset'
// | 'Accordion'
// | 'Highlight'
// | 'Indicator'
// | 'Blockquote'
// | 'Pagination'
// | 'Breadcrumb'
// | 'Autocomplete'
// | 'BackgroundImage';

export const anatomyElements: Record<AnatomyElementKey, AnatomyElementData> = {
  Box: { id: 'Anatomy-box', name: 'Box', summary: `` },
  Link: { id: 'Anatomy-link', name: 'Link', summary: `` },
  Item: { id: 'Anatomy-item', name: 'Item', summary: `` },
  Label: { id: 'Anatomy-label', name: 'Label', summary: `` },
  Button: { id: 'Anatomy-button', name: 'Button', summary: `` },
  // Pin: { id: 'Anatomy-pin', name: 'Pin', summary: `` },
  // Tag: { id: 'Anatomy-tag', name: 'Tag', summary: `` },
  // Kbd: { id: 'Anatomy-kbd', name: 'Kbd', summary: `` },
  // Code: { id: 'Anatomy-code', name: 'Code', summary: `` },
  // List: { id: 'Anatomy-list', name: 'List', summary: `` },
  // Icon: { id: 'Anatomy-icon', name: 'Icon', summary: `` },
  // Pill: { id: 'Anatomy-pill', name: 'Pill', summary: `` },
  // Text: { id: 'Anatomy-text', name: 'Text', summary: `` },
  // Chip: { id: 'Anatomy-chip', name: 'Chip', summary: `` },
  // Link: { id: 'Anatomy-link', name: 'Link', summary: `` },
  // Tabs: { id: 'Anatomy-tabs', name: 'Tabs', summary: `` },
  // Card: { id: 'Anatomy-card', name: 'Card', summary: `` },
  // Menu: { id: 'Anatomy-menu', name: 'Menu', summary: `` },
  // Modal: { id: 'Anatomy-modal', name: 'Modal', summary: `` },
  // Image: { id: 'Anatomy-image', name: 'Image', summary: `` },
  // Radio: { id: 'Anatomy-radio', name: 'Radio', summary: `` },
  // Close: { id: 'Anatomy-close', name: 'Close', summary: `` },
  // Group: { id: 'Anatomy-group', name: 'Group', summary: `` },
  // Stack: { id: 'Anatomy-stack', name: 'Stack', summary: `` },
  // Label: { id: 'Anatomy-label', name: 'Label', summary: `` },
  // Badge: { id: 'Anatomy-badge', name: 'Badge', summary: `` },
  // Swatch: { id: 'Anatomy-swatch', name: 'Swatch', summary: `` },
  // Dialog: { id: 'Anatomy-dialog', name: 'Dialog', summary: `` },
  // Drawer: { id: 'Anatomy-drawer', name: 'Drawer', summary: `` },
  // Avatar: { id: 'Anatomy-avatar', name: 'Avatar', summary: `` },
  // Action: { id: 'Anatomy-action', name: 'Action', summary: `` },
  // Button: { id: 'Anatomy-button', name: 'Button', summary: `` },
  // Toggle: { id: 'Anatomy-toggle', name: 'Toggle', summary: `` },
  // Number: { id: 'Anatomy-number', name: 'Number', summary: `` },
  // Rating: { id: 'Anatomy-rating', name: 'Rating', summary: `` },
  // Switch: { id: 'Anatomy-switch', name: 'Switch', summary: `` },
  // Slider: { id: 'Anatomy-slider', name: 'Slider', summary: `` },
  // Select: { id: 'Anatomy-select', name: 'Select', summary: `` },
  // Anchor: { id: 'Anatomy-anchor', name: 'Anchor', summary: `` },
  // Burger: { id: 'Anatomy-burger', name: 'Burger', summary: `` },
  // Option: { id: 'Anatomy-option', name: 'Option', summary: `` },
  // Divider: { id: 'Anatomy-divider', name: 'Divider', summary: `` },
  // Overlay: { id: 'Anatomy-overlay', name: 'Overlay', summary: `` },
  // Spoiler: { id: 'Anatomy-spoiler', name: 'Spoiler', summary: `` },
  // Loading: { id: 'Anatomy-loading', name: 'Loading', summary: `` },
  // Tooltip: { id: 'Anatomy-tooltip', name: 'Tooltip', summary: `` },
  // Stepper: { id: 'Anatomy-stepper', name: 'Stepper', summary: `` },
  // Control: { id: 'Anatomy-control', name: 'Control', summary: `` },
  // Heading: { id: 'Anatomy-heading', name: 'Heading', summary: `` },
  // TextBox: { id: 'Anatomy-textbox', name: 'TextBox', summary: `` },
  // Timeline: { id: 'Anatomy-timeline', name: 'Timeline', summary: `` },
  // Textarea: { id: 'Anatomy-textarea', name: 'Textarea', summary: `` },
  // Checkbox: { id: 'Anatomy-checkbox', name: 'Checkbox', summary: `` },
  // Combobox: { id: 'Anatomy-combobox', name: 'Combobox', summary: `` },
  // Fieldset: { id: 'Anatomy-fieldset', name: 'Fieldset', summary: `` },
  // Accordion: { id: 'Anatomy-accordion', name: 'Accordion', summary: `` },
  // Highlight: { id: 'Anatomy-highlight', name: 'Highlight', summary: `` },
  // Indicator: { id: 'Anatomy-indicator', name: 'Indicator', summary: `` },
  // Blockquote: { id: 'Anatomy-blockquote', name: 'Blockquote', summary: `` },
  // Pagination: { id: 'Anatomy-pagination', name: 'Pagination', summary: `` },
  // Breadcrumb: { id: 'Anatomy-breadcrumb', name: 'Breadcrumb', summary: `` },
  // Autocomplete: { id: 'Anatomy-autocomplete', name: 'Autocomplete', summary: `` },
  // BackgroundImage: { id: 'Anatomy-backgroundimage', name: 'BackgroundImage', summary: `` },
  // TableHeader: { id: 'Anatomy-tableheader', name: 'TableHeader', summary: `` },
  // TableHead: { id: 'Anatomy-tablehead', name: 'TableHead', summary: `` },
  // TableBody: { id: 'Anatomy-tablebody', name: 'TableBody', summary: `` },
  // TableCell: { id: 'Anatomy-tablecell', name: 'TableCell', summary: `` },
  // TableRow: { id: 'Anatomy-tablerow', name: 'TableRow', summary: `` },
  // Table: { id: 'Anatomy-table', name: 'Table', summary: `` },
};

type AnatomySchemeBase = STORE.ThemeState['accent'] | 'accent';
type AnatomyScheme = AnatomySchemeBase | `${AnatomySchemeBase}-border`;

export interface AnatomyElementProps extends Omit<TBDX.BaseProps<'div'>, 'children'> {
  as: keyof typeof anatomyElements;
  label?: string | undefined;
  scheme?: AnatomyScheme | undefined;
  expansion?: React.ReactNode | undefined;
}

const defaultProps: Partial<AnatomyElementProps> = {
  as: 'Box',
};

export interface AnatomyExpansionProps extends Partial<AnatomyElementProps> {
  expanded?: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnatomyExpansion = (props: AnatomyExpansionProps) => {
  const { expansion, expanded, setExpanded } = props;

  if (!expansion) return null;

  return (
    <React.Fragment>
      <button
        onClick={() => setExpanded((c) => !c)}
        className="Anatomy-expansion-target"
        children={<PlusIcon className="icon" />}
      />
      {!expanded ? null : <div className="Anatomy-expansion-box">{expansion}</div>}
    </React.Fragment>
  );
};

export const AnatomyElement = React.forwardRef<HTMLDivElement, AnatomyElementProps>(
  (props, ref) => {
    const {
      as,
      label,
      scheme = 'gray',
      className,
      expansion,
      ...forwardedProps
    } = mergeProps(props, defaultProps);

    const [expanded, setExpanded] = React.useState<boolean>(false);
    const presets = anatomyElements[as];

    return (
      <div className="Anatomy-element-wrapper">
        <AnatomyExpansion setExpanded={setExpanded} expanded={expanded} expansion={expansion} />
        <div
          {...forwardedProps}
          id={presets.id}
          ref={ref}
          children={<Text>{label || presets.name}</Text>}
          className={clsx('Anatomy-element', presets.id)}
          aria-label={label || presets.name}
          data-anatomy-scheme={scheme}
        />
      </div>
    );
  }
);

AnatomyElement.displayName = 'Anatomy.Element';
