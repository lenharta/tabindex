import { HighlighterGeneric } from 'shiki';

export declare namespace Shiki {
  export type Language = 'tsx' | 'css' | 'scss' | 'html' | 'bash' | 'json' | 'js' | 'jsx';

  export type Payload = { code: string; highlighted: boolean };

  export type Generator = (code: string, language: Language) => Payload;

  export type State = HighlighterGeneric<any, any> | null;

  export type ProviderProps = {
    children: React.ReactNode;
    loader: () => Promise<HighlighterGeneric<any, any>>;
  };
}
