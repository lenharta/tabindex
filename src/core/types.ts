export type Noop = () => void;
export type Booleanish = boolean | 'true' | 'false';

export type ExtendProps<P = {}, O = {}> = O & Omit<P, keyof O>;
export type FilterProps<P, U> = Pick<P, Exclude<keyof P, U>>;
