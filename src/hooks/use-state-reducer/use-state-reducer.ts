import * as React from 'react';

export function useStateReducer<T>(initialState: T) {
  return React.useReducer(
    (current: T, update: Partial<T>) => ({
      ...current,
      ...update,
    }),
    initialState
  );
}
