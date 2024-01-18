import { createFactory, createThemeClasses } from '@/utils';
import { type TFactoryInlineInput } from './InlineInput.types';
import { Button, Text } from '@/common/Unstyled';

export const InlineInput = createFactory<TFactoryInlineInput>((props, ref) => {
  const { id, children, className, align, size, label, text, ...otherProps } = props;

  const noteId = id && `${id}-message`;
  const css = createThemeClasses({ base: 'InlineInput-Root', modifiers: {}, className });

  return (
    <Button {...otherProps} id={id} aria-describedby={noteId} ref={ref} className={css}>
      {children}
      <div>
        <InlineInput.Label id={id} label={label} />
        <InlineInput.Note id={noteId} text={text} />
      </div>
    </Button>
  );
});

export const InlineInputLabel = ({ id, label }: { id?: string; label?: string }) => {
  if (!label || !id) return null;
  return (
    <label htmlFor={id} className="InlineInput-Label">
      {label}
    </label>
  );
};

export const InlineInputNote = ({ id, text }: { id?: string; text?: string }) => {
  if (!text || !id) return null;
  return (
    <Text id={id} className="InlineInput-Note" span>
      {text}
    </Text>
  );
};

InlineInput.displayName = '@tabindex/InlineInput';
InlineInputNote.displayName = '@tabindex/InlineInput.Note';
InlineInputLabel.displayName = '@tabindex/InlineInput.Label';

InlineInput.Note = InlineInputNote;
InlineInput.Label = InlineInputLabel;
