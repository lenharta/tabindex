declare namespace Core {
  export type Noop = () => void;
  export type Booleanish = boolean | 'true' | 'false';
  export type Filter<P, U> = Pick<P, Exclude<keyof P, U>>;
  export type Merge<P = {}, O = {}> = P & Omit<O, keyof P>;
  export type Extend<P = {}, O = {}> = O & Omit<P, keyof O>;
}

declare namespace CoreProps {
  export type Mode = 'light' | 'dark';
  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Spacing = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
  export type FontSize = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
  export type FontWeight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

  export type Position = 'top' | 'right' | 'bottom' | 'left';
  export type Alignment = 'start' | 'center' | 'end';
  export type Placement = Position & `${Position}_${Alignment}`;
  export type Orientation = 'vertical' | 'horizontal';
}
