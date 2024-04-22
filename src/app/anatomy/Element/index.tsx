import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '@/common/utils';

export const anatomyPresets = {
  Box: { className: 'Anatomy-element--Box', label: 'Box' },
  Text: { className: 'Anatomy-element--Text', label: 'Text' },
  Group: { className: 'Anatomy-element--Group', label: 'Group' },
  Title: { className: 'Anatomy-element--Title', label: 'Title' },
  Label: { className: 'Anatomy-element--Label', label: 'Label' },
  Button: { className: 'Anatomy-element--Button', label: 'Button' },
  Toggle: { className: 'Anatomy-element--Toggle', label: 'Toggle' },
  TextBox: { className: 'Anatomy-element--TextBox', label: 'TextBox' },
  Segment: { className: 'Anatomy-element--Segment', label: 'Segment' },
};

export interface AnatomyElementProps extends Omit<TBDX.BaseProps<'div'>, 'children'> {
  as: keyof typeof anatomyPresets;
}

const defaultProps: Partial<AnatomyElementProps> = {
  as: 'Box',
};

export const AnatomyElement = React.forwardRef<HTMLDivElement, AnatomyElementProps>(
  (props, ref) => {
    const { as, className, ...forwardedProps } = mergeProps(props, defaultProps);
    const presets = anatomyPresets[as];
    return (
      <div
        {...forwardedProps}
        id={[as, 'element'].join('-')}
        className={clsx('Anatomy-element', presets.className)}
        aria-label={presets.label}
        children={presets.label}
        ref={ref}
      />
    );
  }
);

AnatomyElement.displayName = 'Anatomy.Element';
