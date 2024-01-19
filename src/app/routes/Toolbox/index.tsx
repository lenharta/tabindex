import { Page } from '@/app/components';
import React from 'react';

// type CheckboxValue = 'checked' | 'unchecked' | 'indeterminate';

// export interface CheckboxGroupContextValue {
//   value?: CheckboxValue[];
//   onChange?: (value: CheckboxValue) => void;
// }

// const CheckboxGroupContext = React.createContext({} as CheckboxGroupContextValue);
// const useCheckboxContext = () => React.useContext(CheckboxGroupContext);
// const CheckboxGroupProvider = CheckboxGroupContext.Provider;

// export interface CheckboxGroupProps {
//   children?: React.ReactNode;
//   label?: { id?: string; text?: string };
// }

// export const CheckboxGroup = (props: CheckboxGroupProps) => {
//   const { children, label } = props;
//   return (
//     <CheckboxGroupProvider value={{}}>
//       <fieldset>
//         {label?.text && <legend id={label?.id}>{label?.text}</legend>}
//         {children && <div>{children}</div>}
//       </fieldset>
//     </CheckboxGroupProvider>
//   );
// };

// export interface CheckboxLabelProps {
//   id?: string | undefined;
//   text?: string | undefined;
//   htmlFor?: string | undefined;
//   position?: 'left' | 'right';
// }

// export interface CheckboxErrorProps {
//   id?: string | undefined;
//   text?: string | undefined;
// }

// export interface CheckboxMessageProps {
//   id?: string | undefined;
//   text?: string | undefined;
// }

// export interface CheckboxProps {
//   value?: CheckboxValue;
//   onChange?: (value: CheckboxValue) => void;
//   label?: CheckboxLabelProps | undefined;
//   error?: CheckboxErrorProps | undefined;
//   message?: CheckboxErrorProps | undefined;
// }

// export const Checkbox = (props: CheckboxProps) => {
//   const { error, label, message, onChange, value } = props;
//   const ctx = useCheckboxContext();
//   return <button></button>;
// };

// const CheckboxGroupDemo = () => {
//   return (
//     <div>
//       <CheckboxGroup></CheckboxGroup>
//     </div>
//   );
// };

export default function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Toolbox" />
      <Page.Content>
        <span>Content</span>
      </Page.Content>
    </Page>
  );
}
