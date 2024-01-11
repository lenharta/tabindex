import * as React from 'react';
import { UnstyledBody } from './Unstyled';
import { factory, type Factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';

export type TPropsBody = React.HTMLAttributes<HTMLParagraphElement>;

export interface IPropsBody {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alignment: 'start' | 'center' | 'end';
  fontWeight: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
  fontStyle: 'normal' | 'italic';
}

export type TFactoryBody = Factory<{
  props: TPropsBody & IPropsBody;
  ref: HTMLParagraphElement;
}>;

const defaultProps: Partial<IPropsBody> = {
  size: 'sm',
  alignment: 'start',
  fontWeight: 'reg',
  fontStyle: 'normal',
};

export const Body = factory<TFactoryBody>((props, ref) => {
  const { children, className, size, alignment, fontStyle, fontWeight, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Body',
    modifiers: { size, alignment, fontStyle, fontWeight },
    className,
  });

  return (
    <UnstyledBody {...defaultProps} {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledBody>
  );
});
