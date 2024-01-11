import * as React from 'react';
import { UnstyledButton } from '../Button/Unstyled';
import { type Factory, factory } from '@/utils/create-factory';

type InlineInputFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const InlineInput = factory<InlineInputFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <UnstyledButton {...otherProps} ref={ref}>
      {children}
    </UnstyledButton>
  );
});

// import clsx from 'clsx';
// import React from 'react';
// import type { IPropsInlineInput } from './types';

// type TOmittedHookProps = 'children' | 'ref' | 'leftContent' | 'rightContent';

// const useInlineInputProps = (props: Omit<IPropsInlineInput, TOmittedHookProps>) => {
//   const { id, label, isDisabled, isReadonly, className, ...otherProps } = props;

//   const dataProps = {
//     'data-disabled': isDisabled,
//     'data-readonly': isReadonly,
//   };

//   const ariaProps = {
//     'aria-label': label || id,
//     'aria-disabled': isDisabled,
//     'aria-readonly': isReadonly,
//   };

//   const css = {
//     root: clsx('InlineInput', className),
//     label: 'InlineInput-label',
//     leftContent: 'InlineInput-content--left',
//     rightContent: 'InlineInput-content--right',
//   };

//   return {
//     rootProps: {
//       ...otherProps,
//       ...ariaProps,
//       ...dataProps,
//       id,
//       disabled: isDisabled,
//       className: css.root,
//     },
//     labelProps: {
//       htmlFor: id,
//       children: label,
//       className: css.label,
//     },
//   };
// };

// export const InlineInput = React.forwardRef<HTMLButtonElement, IPropsInlineInput>((props, ref) => {
//   const { children, dir = 'ltr', ...otherProps } = props;
//   const { rootProps, labelProps } = useInlineInputProps(otherProps);
//   return (
//     <button role="checkbox" {...rootProps} ref={ref}>
//       {dir === 'ltr' && children}
//       <label {...labelProps} />
//       {dir === 'rtl' && children}
//     </button>
//   );
// });
