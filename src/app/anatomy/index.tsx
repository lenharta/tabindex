import React from 'react';
import { AnatomyElement, AnatomyElementProps } from './Element';

export interface AnatomyProps {
  children?: React.ReactNode | undefined;
}

export type AnatomyElements = {
  Text: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Group: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Title: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Label: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Button: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Toggle: React.FC<Omit<AnatomyElementProps, 'as'>>;
  TextBox: React.FC<Omit<AnatomyElementProps, 'as'>>;
  Segment: React.FC<Omit<AnatomyElementProps, 'as'>>;
};

export type AnatomyComponent = React.FC<AnatomyProps> & AnatomyElements;

export const Anatomy: AnatomyComponent = (props) => {
  const { children } = props;
  return (
    <section className="Anatomy">
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};

Anatomy.Text = (props) => <AnatomyElement as="Text" {...props} />;
Anatomy.Group = (props) => <AnatomyElement as="Group" {...props} />;
Anatomy.Title = (props) => <AnatomyElement as="Title" {...props} />;
Anatomy.Label = (props) => <AnatomyElement as="Label" {...props} />;
Anatomy.Button = (props) => <AnatomyElement as="Button" {...props} />;
Anatomy.Toggle = (props) => <AnatomyElement as="Toggle" {...props} />;
Anatomy.TextBox = (props) => <AnatomyElement as="TextBox" {...props} />;
Anatomy.Segment = (props) => <AnatomyElement as="Segment" {...props} />;

Anatomy.Text.displayName = 'Anatomy.Text';
Anatomy.Group.displayName = 'Anatomy.Group';
Anatomy.Title.displayName = 'Anatomy.Title';
Anatomy.Label.displayName = 'Anatomy.Label';
Anatomy.Button.displayName = 'Anatomy.Button';
Anatomy.Toggle.displayName = 'Anatomy.Toggle';
Anatomy.TextBox.displayName = 'Anatomy.TextBox';
Anatomy.Segment.displayName = 'Anatomy.Segment';
