import type { ButtonHTMLAttributes } from 'react';

/** Defines the element type for the input */
export type TElementInlineInput = HTMLButtonElement;

/** Defines intrinsic attributes for the input wrapper */
export type TPropsInlineInput = ButtonHTMLAttributes<TElementInlineInput>;

export type TFilterPropsInlineInput = Omit<TPropsInlineInput, 'disabled'>;

export interface IPropsInlineInput extends TFilterPropsInlineInput {
  /** Specifies a label for the input */
  label?: string;

  /** Indicates the disabled state of the input */
  isDisabled?: boolean;

  /** Indicates the readonly state of the input */
  isReadonly?: boolean;

  /** Specifies content to the left of the input label */
  leftContent?: React.ReactNode;

  /** Specifies content to the right of the input label */
  rightContent?: React.ReactNode;
}
