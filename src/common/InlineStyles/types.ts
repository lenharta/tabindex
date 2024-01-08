export interface IMediaQueryInput {
  query: string;
  styles: React.CSSProperties;
}

export interface IStyleInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: IMediaQueryInput[];
}

export interface IInlineStyles {
  selector: string;
  styles?: React.CSSProperties;
  media?: IMediaQueryInput[];
}
