import * as React from 'react';

export const Textbox = React.forwardRef<HTMLInputElement, {}>((props, ref) => {
  const {} = props;
  return (
    <input ref={ref}>
      <span>Textbox</span>
    </input>
  );
});
