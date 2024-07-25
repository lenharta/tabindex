import { useShiki } from '@/shiki';
import { Core, Shiki } from '@/types';

type SnippetTransitionProps = Core.CSS & {
  easing?: React.CSSProperties['transitionTimingFunction'] | undefined;
  property?: React.CSSProperties['transitionProperty'] | undefined;
  duration?: React.CSSProperties['transitionDuration'] | undefined;
};

type SnippetProps = SnippetTransitionProps & {
  lang?: Shiki.Language | undefined;
  code?: string | undefined;
};

const defaultSnippetTransition: SnippetTransitionProps = {
  property: 'background-color, border-color, color',
  duration: '400ms',
  easing: 'ease-in-out',
};

function parseSnippetStyles(props: SnippetTransitionProps): Core.CSS['style'] {
  return {
    ...props.style,
    transitionTimingFunction: props.easing || defaultSnippetTransition.easing,
    transitionProperty: props.property || defaultSnippetTransition.property,
    transitionDuration: props.duration || defaultSnippetTransition.duration,
  };
}

function Snippet(props: SnippetProps) {
  const { code: rawCode = '', lang = 'tsx', duration, easing, property, style } = props;

  const shiki = useShiki();

  const { highlighted, code } = shiki(rawCode.trim(), lang || 'tsx');

  return (
    <div
      role="presentation"
      style={parseSnippetStyles({ style, duration, easing, property })}
      className="tbx-snippet"
    >
      {!highlighted ? (
        <pre children={<code>{code}</code>} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: code }} />
      )}
    </div>
  );
}

Snippet.displayName = 'Common.Snippet';
export { Snippet };
