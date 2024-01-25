import { ExtendProps } from '@/core/types';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Spacing = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
export type Alignment = 'start' | 'center' | 'end';
export type Orientation = 'vertical' | 'horizontal';

export type FontSize = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
export type FontWeight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export interface CoreElements {
  button: HTMLElementTagNameMap['button'];
  div: HTMLElementTagNameMap['div'];
  span: HTMLElementTagNameMap['span'];
  label: HTMLElementTagNameMap['label'];
  strong: HTMLElementTagNameMap['strong'];
  code: HTMLElementTagNameMap['code'];
  style: HTMLElementTagNameMap['style'];
  input: HTMLElementTagNameMap['input'];
  textarea: HTMLElementTagNameMap['textarea'];
  fieldset: HTMLElementTagNameMap['fieldset'];
  footer: HTMLElementTagNameMap['footer'];
  header: HTMLElementTagNameMap['header'];
  main: HTMLElementTagNameMap['main'];
  h1: HTMLElementTagNameMap['h1'];
  h2: HTMLElementTagNameMap['h2'];
  h3: HTMLElementTagNameMap['h3'];
  h4: HTMLElementTagNameMap['h4'];
  h5: HTMLElementTagNameMap['h5'];
  h6: HTMLElementTagNameMap['h6'];
  b: HTMLElementTagNameMap['b'];
  p: HTMLElementTagNameMap['p'];
  a: HTMLElementTagNameMap['a'];
}

export interface CoreProps {
  button: JSX.IntrinsicElements['button'];
  div: JSX.IntrinsicElements['div'];
  span: JSX.IntrinsicElements['span'];
  label: JSX.IntrinsicElements['label'];
  strong: JSX.IntrinsicElements['strong'];
  code: JSX.IntrinsicElements['code'];
  style: JSX.IntrinsicElements['style'];
  input: JSX.IntrinsicElements['input'];
  textarea: JSX.IntrinsicElements['textarea'];
  fieldset: JSX.IntrinsicElements['fieldset'];
  footer: JSX.IntrinsicElements['footer'];
  header: JSX.IntrinsicElements['header'];
  main: JSX.IntrinsicElements['main'];
  h1: JSX.IntrinsicElements['h1'];
  h2: JSX.IntrinsicElements['h2'];
  h3: JSX.IntrinsicElements['h3'];
  h4: JSX.IntrinsicElements['h4'];
  h5: JSX.IntrinsicElements['h5'];
  h6: JSX.IntrinsicElements['h6'];
  b: JSX.IntrinsicElements['b'];
  p: JSX.IntrinsicElements['p'];
  a: JSX.IntrinsicElements['a'];
}
