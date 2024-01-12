import * as React from 'react';

export interface IProviderSecureContext<CTX> {
  children: React.ReactNode;
  value: CTX;
}

export function createSecureContext<CTX>(
  errorMessage: string
): [(props: IProviderSecureContext<CTX>) => JSX.Element, () => CTX & ({} | undefined)] {
  const Context = React.createContext<CTX | null>(null);

  const useSecureCTX = () => {
    const ctx = React.useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const ProviderCTX = ({ value, children }: IProviderSecureContext<CTX>) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return [ProviderCTX, useSecureCTX];
}
