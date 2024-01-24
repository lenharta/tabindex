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

export type BasePageProps = {};

export type BasePageHeroProps = {
  headline?: string;
};

export type BasePageHeaderProps = {};

export type BasePageFooterProps = {};

export type BasePageContentProps = {};

export type BaseTitleProps = {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
  size?: FontSize;
  weight?: FontWeight;
};

export interface BaseProps {
  Link: BaseLinkProps;
  NavLink: BaseNavLinkProps;
  Button: BaseButtonProps;
  ButtonUnstyled: BaseButtonUnstyledProps;
  Checkbox: BaseCheckboxProps;
  Control: BaseControlProps;
  InlineInput: BaseInlineInputProps;
  Radio: BaseRadioProps;
  Switch: BaseSwitchProps;
  Text: BaseTextProps;
  Span: BaseSpanProps;
  Strong: BaseStrongProps;
  Title: BaseTitleProps;
  Page: BasePageProps;
  PageHero: BasePageHeroProps;
  PageHeader: BasePageHeaderProps;
  PageFooter: BasePageFooterProps;
  PageContent: BasePageContentProps;
}

export interface Tags {
  Link: 'a';
  NavLink: 'a';
  Button: 'button';
  ButtonUnstyled: 'button';
  Checkbox: 'button';
  Control: 'button';
  InlineInput: 'button';
  Radio: 'button';
  Switch: 'button';
  Text: 'p';
  Span: 'span';
  Strong: 'strong';
  Title: 'h1';
  Page: 'div';
  PageHero: 'div';
  PageHeader: 'header';
  PageFooter: 'footer';
  PageContent: 'main';
}

export interface Elements {
  Link: HTMLAnchorElement;
  NavLink: HTMLAnchorElement;
  Button: HTMLButtonElement;
  ButtonUnstyled: HTMLButtonElement;
  Checkbox: HTMLButtonElement;
  Control: HTMLButtonElement;
  InlineInput: HTMLButtonElement;
  Radio: HTMLButtonElement;
  Switch: HTMLButtonElement;
  Text: HTMLParagraphElement;
  Span: HTMLSpanElement;
  Strong: HTMLElement;
  Title: HTMLHeadingElement;
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
