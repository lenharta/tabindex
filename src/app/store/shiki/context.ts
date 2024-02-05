import * as React from 'react';
import { type HighlighterGeneric } from 'shikiji';

export type ShikiCodeLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

export type ShikiHighlightState = HighlighterGeneric<any, any> | null;

export interface ShikiHighlightReturn {
  code: string;
  highlighted: boolean;
}

export type ShikiHighlight = (code: string, language: ShikiCodeLanguage) => ShikiHighlightReturn;

export type ShikiLoader = () => Promise<HighlighterGeneric<any, any>>;

export type ShikiProviderProps = {
  children?: React.ReactNode;
  loadShiki: ShikiLoader;
};

export const ShikiContext = React.createContext<ShikiHighlight | null>(null);
