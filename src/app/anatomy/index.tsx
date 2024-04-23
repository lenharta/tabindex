import React from 'react';
import { AnatomyElement, AnatomyElementKey, AnatomyElementProps } from './Element';
import clsx from 'clsx';

export interface AnatomyProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type AnatomyElements = Record<AnatomyElementKey, React.FC<Omit<AnatomyElementProps, 'as'>>>;
export type AnatomyComponent = React.FC<AnatomyProps> & AnatomyElements;

export const Anatomy: AnatomyComponent = (props) => {
  const { className, children } = props;
  return (
    <section className={clsx('Anatomy')}>
      <div className={clsx('Anatomy-canvas', className)}>{children}</div>
    </section>
  );
};

Anatomy.Box = (props) => <AnatomyElement as="Box" {...props} />;
Anatomy.Link = (props) => <AnatomyElement as="Link" {...props} />;
Anatomy.Item = (props) => <AnatomyElement as="Item" {...props} />;
Anatomy.Label = (props) => <AnatomyElement as="Label" {...props} />;
Anatomy.Button = (props) => <AnatomyElement as="Button" {...props} />;
// Anatomy.Pin = (props) => <AnatomyElement as="Pin" {...props} />;
// Anatomy.Tag = (props) => <AnatomyElement as="Tag" {...props} />;
// Anatomy.Kbd = (props) => <AnatomyElement as="Kbd" {...props} />;
// Anatomy.Code = (props) => <AnatomyElement as="Code" {...props} />;
// Anatomy.List = (props) => <AnatomyElement as="List" {...props} />;
// Anatomy.Icon = (props) => <AnatomyElement as="Icon" {...props} />;
// Anatomy.Pill = (props) => <AnatomyElement as="Pill" {...props} />;
// Anatomy.Text = (props) => <AnatomyElement as="Text" {...props} />;
// Anatomy.Chip = (props) => <AnatomyElement as="Chip" {...props} />;
// Anatomy.Link = (props) => <AnatomyElement as="Link" {...props} />;
// Anatomy.Tabs = (props) => <AnatomyElement as="Tabs" {...props} />;
// Anatomy.Card = (props) => <AnatomyElement as="Card" {...props} />;
// Anatomy.Menu = (props) => <AnatomyElement as="Menu" {...props} />;
// Anatomy.Modal = (props) => <AnatomyElement as="Modal" {...props} />;
// Anatomy.Image = (props) => <AnatomyElement as="Image" {...props} />;
// Anatomy.Radio = (props) => <AnatomyElement as="Radio" {...props} />;
// Anatomy.Close = (props) => <AnatomyElement as="Close" {...props} />;
// Anatomy.Group = (props) => <AnatomyElement as="Group" {...props} />;
// Anatomy.Stack = (props) => <AnatomyElement as="Stack" {...props} />;
// Anatomy.Label = (props) => <AnatomyElement as="Label" {...props} />;
// Anatomy.Badge = (props) => <AnatomyElement as="Badge" {...props} />;
// Anatomy.Swatch = (props) => <AnatomyElement as="Swatch" {...props} />;
// Anatomy.Dialog = (props) => <AnatomyElement as="Dialog" {...props} />;
// Anatomy.Drawer = (props) => <AnatomyElement as="Drawer" {...props} />;
// Anatomy.Avatar = (props) => <AnatomyElement as="Avatar" {...props} />;
// Anatomy.Action = (props) => <AnatomyElement as="Action" {...props} />;
// Anatomy.Button = (props) => <AnatomyElement as="Button" {...props} />;
// Anatomy.Toggle = (props) => <AnatomyElement as="Toggle" {...props} />;
// Anatomy.Number = (props) => <AnatomyElement as="Number" {...props} />;
// Anatomy.Rating = (props) => <AnatomyElement as="Rating" {...props} />;
// Anatomy.Switch = (props) => <AnatomyElement as="Switch" {...props} />;
// Anatomy.Slider = (props) => <AnatomyElement as="Slider" {...props} />;
// Anatomy.Select = (props) => <AnatomyElement as="Select" {...props} />;
// Anatomy.Anchor = (props) => <AnatomyElement as="Anchor" {...props} />;
// Anatomy.Burger = (props) => <AnatomyElement as="Burger" {...props} />;
// Anatomy.Option = (props) => <AnatomyElement as="Option" {...props} />;
// Anatomy.Divider = (props) => <AnatomyElement as="Divider" {...props} />;
// Anatomy.Overlay = (props) => <AnatomyElement as="Overlay" {...props} />;
// Anatomy.Spoiler = (props) => <AnatomyElement as="Spoiler" {...props} />;
// Anatomy.Loading = (props) => <AnatomyElement as="Loading" {...props} />;
// Anatomy.Tooltip = (props) => <AnatomyElement as="Tooltip" {...props} />;
// Anatomy.Stepper = (props) => <AnatomyElement as="Stepper" {...props} />;
// Anatomy.Control = (props) => <AnatomyElement as="Control" {...props} />;
// Anatomy.Heading = (props) => <AnatomyElement as="Heading" {...props} />;
// Anatomy.TextBox = (props) => <AnatomyElement as="TextBox" {...props} />;
// Anatomy.Timeline = (props) => <AnatomyElement as="Timeline" {...props} />;
// Anatomy.Textarea = (props) => <AnatomyElement as="Textarea" {...props} />;
// Anatomy.Checkbox = (props) => <AnatomyElement as="Checkbox" {...props} />;
// Anatomy.Combobox = (props) => <AnatomyElement as="Combobox" {...props} />;
// Anatomy.Fieldset = (props) => <AnatomyElement as="Fieldset" {...props} />;
// Anatomy.Accordion = (props) => <AnatomyElement as="Accordion" {...props} />;
// Anatomy.Highlight = (props) => <AnatomyElement as="Highlight" {...props} />;
// Anatomy.Indicator = (props) => <AnatomyElement as="Indicator" {...props} />;
// Anatomy.Blockquote = (props) => <AnatomyElement as="Blockquote" {...props} />;
// Anatomy.Pagination = (props) => <AnatomyElement as="Pagination" {...props} />;
// Anatomy.Breadcrumb = (props) => <AnatomyElement as="Breadcrumb" {...props} />;
// Anatomy.Autocomplete = (props) => <AnatomyElement as="Autocomplete" {...props} />;
// Anatomy.BackgroundImage = (props) => <AnatomyElement as="BackgroundImage" {...props} />;
// Anatomy.TableHeader = (props) => <AnatomyElement as="TableHeader" {...props} />;
// Anatomy.TableHead = (props) => <AnatomyElement as="TableHead" {...props} />;
// Anatomy.TableBody = (props) => <AnatomyElement as="TableBody" {...props} />;
// Anatomy.TableCell = (props) => <AnatomyElement as="TableCell" {...props} />;
// Anatomy.TableRow = (props) => <AnatomyElement as="TableRow" {...props} />;
// Anatomy.Table = (props) => <AnatomyElement as="Table" {...props} />;
