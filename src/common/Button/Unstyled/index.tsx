import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type UnstyledButtonFactory = Factory<{
  ref: HTMLButtonElement;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}>;

export const UnstyledButton = factory<UnstyledButtonFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button ref={ref} {...otherProps}>
      {children}
    </button>
  );
});

// React.forwardRef<HTMLTextAreaElement>((props, ref) => {
//   const {} = props;
//   return (
//     <textarea ref={ref}>
//       <span>UnstyledButton</span>
//     </textarea>
//   );
// });
