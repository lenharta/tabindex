import type { ButtonHTMLAttributes } from 'react';

/** Defines the root element type of the element */
export type TElementInlineInput = HTMLButtonElement;

/** Defines intrinsic attributes for the input button wrapper */
export type TPropsInlineInput = ButtonHTMLAttributes<TElementInlineInput>;

/** Defines properties for the inline input component */
export interface IPropsInlineInput extends TPropsInlineInput {
  readonly: boolean;
}
