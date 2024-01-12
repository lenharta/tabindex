import { Factory } from '@/utils';

export type TPropsSandboxDisplay = React.HTMLAttributes<HTMLDivElement>;
export type TPropsSandboxDisplayPanel = React.HTMLAttributes<HTMLDivElement>;
export type TPropsSandboxDisplayAction = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsSandboxDisplayActionMenu = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsSandboxDisplay extends TPropsSandboxDisplay {}
export interface IPropsSandboxDisplayPanel extends TPropsSandboxDisplayPanel {}
export interface IPropsSandboxDisplayAction extends TPropsSandboxDisplayAction {}
export interface IPropsSandboxDisplayActionMenu extends TPropsSandboxDisplayActionMenu {}

export type TFactorySandboxDisplay = Factory<{
  props: IPropsSandboxDisplay;
  ref: HTMLDivElement;
  components: {
    Panel: React.FC<IPropsSandboxDisplayPanel>;
    Action: React.FC<IPropsSandboxDisplayAction>;
    ActionMenu: React.FC<IPropsSandboxDisplayActionMenu>;
  };
}>;
