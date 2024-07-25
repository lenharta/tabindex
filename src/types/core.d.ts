import * as React from 'react';

export declare namespace Core {
  export type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

  export type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;

  export type ProviderProps = Readonly<{ children?: React.ReactNode | undefined }>;
}
