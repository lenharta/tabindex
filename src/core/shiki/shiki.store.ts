import * as React from 'react';
import { ShikiContext } from './shiki.context';

export function useShiki() {
  const shiki = React.useContext(ShikiContext);

  if (!shiki) {
    return (code: string) => ({ code, highlighted: false });
  }
  return shiki;
}
