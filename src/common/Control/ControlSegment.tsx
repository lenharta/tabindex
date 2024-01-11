import * as React from 'react';

export const ControlSegment = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {} = props;
  return (
    <div ref={ref}>
      <span>ControlSegment</span>
    </div>
  );
});
