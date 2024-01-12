import { Factory } from '@/utils';

export type TPropsSandboxControl = React.HTMLAttributes<HTMLDivElement>;
export type TPropsSandboxControlPanel = React.HTMLAttributes<HTMLDivElement>;
export type TPropsSandboxControlOption = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsSandboxControlOptionMenu = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsSandboxControl extends TPropsSandboxControl {}
export interface IPropsSandboxControlPanel extends TPropsSandboxControlPanel {}
export interface IPropsSandboxControlOption extends TPropsSandboxControlOption {}
export interface IPropsSandboxControlOptionMenu extends TPropsSandboxControlOptionMenu {}

export type TFactorySandboxControl = Factory<{
  props: IPropsSandboxControl;
  ref: HTMLDivElement;
  components: {
    Panel: React.FC<IPropsSandboxControlPanel>;
    Option: React.FC<IPropsSandboxControlOption>;
    OptionMenu: React.FC<IPropsSandboxControlOptionMenu>;
  };
}>;

export type TFactorySandboxControlPanel = Factory<{
  props: IPropsSandboxControlPanel;
  ref: HTMLDivElement;
}>;

export type TFactorySandboxControlOption = Factory<{
  props: IPropsSandboxControlOption;
  ref: HTMLButtonElement;
}>;

export type TFactorySandboxControlOptionMenu = Factory<{
  props: IPropsSandboxControlOptionMenu;
  ref: HTMLDivElement;
}>;
