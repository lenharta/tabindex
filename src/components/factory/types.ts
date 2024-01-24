export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Spacing = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
export type Alignment = 'start' | 'center' | 'end';
export type Orientation = 'vertical' | 'horizontal';

export type FontSize = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
export type FontWeight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export type BaseLinkProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseNavLinkProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseButtonProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseButtonUnstyledProps = {
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseCheckboxProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseControlProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseInlineInputProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseRadioProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseSwitchProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseTextProps = {
  size?: FontSize;
  weight?: FontWeight;
};

export type BaseSpanProps = {
  size?: FontSize;
  weight?: FontWeight;
};

export type BaseStrongProps = {
  size?: FontSize;
  weight?: FontWeight;
};

export type BaseTitleProps = {
  size?: FontSize;
  weight?: FontWeight;
};

export type BasePageHeroProps = {
  headline?: string;
};

export interface BaseProps {
  // common
  Link: BaseLinkProps;
  NavLink: BaseNavLinkProps;
  Button: BaseButtonProps;
  ButtonUnstyled: BaseButtonUnstyledProps;
  Checkbox: BaseCheckboxProps;
  Control: BaseControlProps;
  InlineStyle: {};
  InlineInput: BaseInlineInputProps;
  Radio: BaseRadioProps;
  Switch: BaseSwitchProps;
  Text: BaseTextProps;
  Span: BaseSpanProps;
  Strong: BaseStrongProps;
  Title: BaseTitleProps;

  // layouts
  Page: {};
  PageHero: BasePageHeroProps;
  PageHeader: {};
  PageFooter: {};
  PageContent: {};
}

export interface Tags {
  // common
  Link: 'a';
  NavLink: 'a';
  Button: 'button';
  ButtonUnstyled: 'button';
  Checkbox: 'button';
  Control: 'button';
  InlineStyle: 'style';
  InlineInput: 'button';
  Radio: 'button';
  Switch: 'button';
  Text: 'p';
  Span: 'span';
  Strong: 'strong';
  Title: 'h1';

  // layouts
  Page: 'div';
  PageHero: 'div';
  PageHeader: 'header';
  PageFooter: 'footer';
  PageContent: 'main';
}

export interface Elements {
  // common
  Link: HTMLAnchorElement;
  NavLink: HTMLAnchorElement;
  Button: HTMLButtonElement;
  ButtonUnstyled: HTMLButtonElement;
  Checkbox: HTMLButtonElement;
  Control: HTMLButtonElement;
  InlineStyle: HTMLStyleElement;
  InlineInput: HTMLButtonElement;
  Radio: HTMLButtonElement;
  Switch: HTMLButtonElement;
  Text: HTMLParagraphElement;
  Span: HTMLSpanElement;
  Strong: HTMLElement;
  Title: HTMLHeadingElement;

  // layouts
  Page: HTMLDivElement;
  PageHero: HTMLDivElement;
  PageHeader: HTMLElement;
  PageFooter: HTMLElement;
  PageContent: HTMLElement;
}

export interface CoreProps {
  // common
  Link: JSX.IntrinsicElements['a'] & BaseProps['Link'];
  NavLink: JSX.IntrinsicElements['a'] & BaseProps['NavLink'];
  Button: JSX.IntrinsicElements['button'] & BaseProps['Button'];
  ButtonUnstyled: JSX.IntrinsicElements['button'] & BaseProps['ButtonUnstyled'];
  Checkbox: JSX.IntrinsicElements['button'] & BaseProps['Checkbox'];
  Control: JSX.IntrinsicElements['button'] & BaseProps['Control'];
  InlineStyle: JSX.IntrinsicElements['style'] & BaseProps['InlineStyle'];
  InlineInput: JSX.IntrinsicElements['button'] & BaseProps['InlineInput'];
  Radio: JSX.IntrinsicElements['button'] & BaseProps['Radio'];
  Switch: JSX.IntrinsicElements['button'] & BaseProps['Switch'];
  Title: JSX.IntrinsicElements['h1'] & BaseProps['Title'];
  Text: JSX.IntrinsicElements['p'] & BaseProps['Text'];
  Span: JSX.IntrinsicElements['span'] & BaseProps['Span'];
  Strong: JSX.IntrinsicElements['strong'] & BaseProps['Strong'];

  // layouts
  Page: JSX.IntrinsicElements['div'] & BaseProps['Page'];
  PageHero: JSX.IntrinsicElements['div'] & BaseProps['PageHero'];
  PageHeader: JSX.IntrinsicElements['header'] & BaseProps['PageHeader'];
  PageFooter: JSX.IntrinsicElements['footer'] & BaseProps['PageFooter'];
  PageContent: JSX.IntrinsicElements['main'] & BaseProps['PageContent'];
}
