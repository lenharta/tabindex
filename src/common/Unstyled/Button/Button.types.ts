import { PolymorphicFactory } from '@/utils';

export type TComponentButton = 'button' | 'a';

export interface IPropsBaseButton {
  loading?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  excludeTabOrder?: boolean;
}

export type TFactoryButton = PolymorphicFactory<{
  props: IPropsBaseButton;
  component: TComponentButton;
}>;
