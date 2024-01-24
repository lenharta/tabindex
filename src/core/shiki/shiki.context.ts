import * as React from 'react';
import { type ShikiHighlight } from './types';

export const ShikiContext = React.createContext<ShikiHighlight | null>(null);
export const ShikiProvider = ShikiContext.Provider;
