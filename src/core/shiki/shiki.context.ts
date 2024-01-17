import * as React from 'react';
import { type TShikiHighlight } from '@/core/types';

export const ShikiContext = React.createContext<TShikiHighlight | null>(null);
