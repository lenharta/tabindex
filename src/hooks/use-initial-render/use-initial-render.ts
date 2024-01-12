import * as React from 'react';

export function useInitialRender(): boolean {
  const isInitial = React.useRef(true);

  if (isInitial.current) {
    isInitial.current = false;
    return true;
  }

  return isInitial.current;
}
