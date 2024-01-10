import { TCoreAlignment, TCoreSize } from '@/core/types';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export type TStateCheckbox = 'true' | 'false' | 'mixed';
export type TStateCheckboxVariant = 'checked' | 'unchecked' | 'indeterminate';

export interface ICheckboxState {
  /** Indicates the checked state of the checkbox */
  checked: TStateCheckbox;

  /** Defines a function handler to update the checked state of the checkbox */
  onChange: (checked: TStateCheckbox) => void;
}

export interface ICheckboxItem {
  /** Specifies a value for the checkbox */
  value: string;

  /** Specifies a label for the checkbox */
  label?: string;

  /** Indicates the disabled state of the checkbox */
  isDisabled?: boolean;

  /** Indicates the readonly state of the checkbox */
  isReadonly?: boolean;
}

export interface ICheckboxItemParsed {
  /** Specifies a value for the checkbox */
  value: string;

  /** Specifies a label for the checkbox */
  label: string;

  /** Indicates the disabled state of the checkbox */
  isDisabled?: boolean;

  /** Indicates the readonly state of the checkbox */
  isReadonly?: boolean;
}

/** Defines intrinsic attributes for the checkbox element */
export type TPropsCheckbox = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'checked'>;

export interface IPropsCheckbox extends TPropsCheckbox, ICheckboxState {
  /** Specifies a size for the checkbox */
  size?: TCoreSize;

  /** Specifies a label for the checkbox */
  label?: string;

  /** Specifies a variant for the checkbox group */
  variant?: 'filled' | 'outlined';

  /** Specifies the alignment of the checkbox content */
  alignment?: TCoreAlignment;

  /** Indicates the disabled state of the checkbox */
  isDisabled?: boolean;

  /** Indicates the readonly state of the checkbox */
  isReadonly?: boolean;
}

/** Defines intrinsic attributes for the checkbox group element */
export type TPropsCheckboxGroup = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'checked'>;

export interface IPropsCheckboxGroup extends TPropsCheckboxGroup, ICheckboxState {
  /** Specifies a size for the checkbox group */
  size?: TCoreSize;

  /** Specifies a label for the checkbox group */
  label?: string;

  /** Specifies a variant for the checkbox group */
  variant?: 'filled' | 'outlined';

  /** Specifies the alignment of the checkbox group content */
  alignment?: TCoreAlignment;

  /** Indicates the disabled state of the checkbox */
  isDisabled?: boolean;

  /** Indicates the readonly state of the checkbox */
  isReadonly?: boolean;
}
