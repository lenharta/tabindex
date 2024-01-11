import * as React from 'react';

export const TextInput = React.forwardRef<HTMLTextAreaElement, {}>((props, ref) => {
  const {} = props;
  return (
    <textarea ref={ref}>
      <span>TextInput</span>
    </textarea>
  );
});
