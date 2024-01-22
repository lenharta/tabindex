import * as React from 'react';
import { type ShikiHighlight } from './shiki.types';

export const ShikiContext = React.createContext<ShikiHighlight | null>(null);
