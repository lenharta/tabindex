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
  alignment?: Alignment;
};

export type BaseLinkGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseNavLinkProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
};

export type BaseNavLinkGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseButtonProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
};

export type BaseButtonGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseButtonUnstyledProps = {
  disabled?: boolean;
  readonly?: boolean;
};

export type BaseCheckboxProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
};

export type BaseCheckboxGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseControlProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
};

export type BaseControlGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
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
  alignment?: Alignment;
};

export type BaseRadioGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseSwitchProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
};

export type BaseSwitchGroupProps = {
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: Alignment;
  orientation?: Orientation;
};

export type BaseTextProps = {
  size?: FontSize;
  weight?: FontWeight;
  alignment?: Alignment;
};

export type BaseSpanProps = {
  size?: FontSize;
  weight?: FontWeight;
  alignment?: Alignment;
};

export type BaseStrongProps = {
  size?: FontSize;
  weight?: FontWeight;
  alignment?: Alignment;
};

export type BaseTitleProps = {
  size?: FontSize;
  weight?: FontWeight;
  alignment?: Alignment;
};

export type BasePageHeroProps = {
  headline?: string;
};

export interface BaseProps {
  Link: BaseLinkProps;
  LinkGroup: BaseLinkGroupProps;
  NavLink: BaseNavLinkProps;
  NavLinkGroup: BaseNavLinkGroupProps;
  Button: BaseButtonProps;
  ButtonGroup: BaseButtonGroupProps;
  ButtonUnstyled: BaseButtonUnstyledProps;
  Checkbox: BaseCheckboxProps;
  CheckboxGroup: BaseCheckboxGroupProps;
  Control: BaseControlProps;
  ControlGroup: BaseControlGroupProps;
  InlineStyle: {};
  InlineInput: BaseInlineInputProps;
  Radio: BaseRadioProps;
  RadioGroup: BaseRadioGroupProps;
  Switch: BaseSwitchProps;
  SwitchGroup: BaseSwitchGroupProps;
  Text: BaseTextProps;
  Span: BaseSpanProps;
  Strong: BaseStrongProps;
  Title: BaseTitleProps;
  Page: {};
  PageHero: BasePageHeroProps;
  PageHeader: {};
  PageFooter: {};
  PageContent: {};
}

export interface Tags {
  Link: 'a';
  LinkGroup: 'div';
  NavLink: 'a';
  NavLinkGroup: 'div';
  Button: 'button';
  ButtonGroup: 'div';
  ButtonUnstyled: 'button';
  Checkbox: 'button';
  CheckboxGroup: 'fieldset';
  Control: 'button';
  ControlGroup: 'fieldset';
  InlineStyle: 'style';
  InlineInput: 'button';
  Radio: 'button';
  RadioGroup: 'fieldset';
  Switch: 'button';
  SwitchGroup: 'fieldset';
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
  LinkGroup: HTMLDivElement;
  NavLink: HTMLAnchorElement;
  NavLinkGroup: HTMLDivElement;
  Button: HTMLButtonElement;
  ButtonGroup: HTMLDivElement;
  ButtonUnstyled: HTMLButtonElement;
  Checkbox: HTMLButtonElement;
  CheckboxGroup: HTMLFieldSetElement;
  Control: HTMLButtonElement;
  ControlGroup: HTMLFieldSetElement;
  InlineStyle: HTMLStyleElement;
  InlineInput: HTMLButtonElement;
  Radio: HTMLButtonElement;
  RadioGroup: HTMLFieldSetElement;
  Switch: HTMLButtonElement;
  SwitchGroup: HTMLFieldSetElement;
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
  Link: JSX.IntrinsicElements['a'] & BaseProps['Link'];
  LinkGroup: JSX.IntrinsicElements['div'] & BaseProps['LinkGroup'];
  NavLink: JSX.IntrinsicElements['a'] & BaseProps['NavLink'];
  NavLinkGroup: JSX.IntrinsicElements['div'] & BaseProps['NavLinkGroup'];
  Button: JSX.IntrinsicElements['button'] & BaseProps['Button'];
  ButtonGroup: JSX.IntrinsicElements['div'] & BaseProps['ButtonGroup'];
  ButtonUnstyled: JSX.IntrinsicElements['button'] & BaseProps['ButtonUnstyled'];
  Checkbox: JSX.IntrinsicElements['button'] & BaseProps['Checkbox'];
  CheckboxGroup: JSX.IntrinsicElements['fieldset'] & BaseProps['CheckboxGroup'];
  Control: JSX.IntrinsicElements['button'] & BaseProps['Control'];
  ControlGroup: JSX.IntrinsicElements['fieldset'] & BaseProps['ControlGroup'];
  InlineStyle: JSX.IntrinsicElements['style'] & BaseProps['InlineStyle'];
  InlineInput: JSX.IntrinsicElements['button'] & BaseProps['InlineInput'];
  Radio: JSX.IntrinsicElements['button'] & BaseProps['Radio'];
  RadioGroup: JSX.IntrinsicElements['fieldset'] & BaseProps['RadioGroup'];
  Switch: JSX.IntrinsicElements['button'] & BaseProps['Switch'];
  SwitchGroup: JSX.IntrinsicElements['fieldset'] & BaseProps['SwitchGroup'];
  Title: JSX.IntrinsicElements['h1'] & BaseProps['Title'];
  Text: JSX.IntrinsicElements['p'] & BaseProps['Text'];
  Span: JSX.IntrinsicElements['span'] & BaseProps['Span'];
  Strong: JSX.IntrinsicElements['strong'] & BaseProps['Strong'];
  Page: JSX.IntrinsicElements['div'] & BaseProps['Page'];
  PageHero: JSX.IntrinsicElements['div'] & BaseProps['PageHero'];
  PageHeader: JSX.IntrinsicElements['header'] & BaseProps['PageHeader'];
  PageFooter: JSX.IntrinsicElements['footer'] & BaseProps['PageFooter'];
  PageContent: JSX.IntrinsicElements['main'] & BaseProps['PageContent'];
}
