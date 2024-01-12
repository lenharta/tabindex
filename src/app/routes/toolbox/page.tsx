import { Page } from '@/app/layouts';
import { Radio } from '@/common/Radio';
import { Switch } from '@/common/Switch';
import { Checkbox } from '@/common/Checkbox';

const Demo = () => {
  return (
    <div>
      <Radio label="Radio" />
      <Switch label="Switch" />
      <Checkbox label="Checkbox" />
    </div>
  );
};

type TSandboxOptions = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'center' | 'start' | 'end';
  scheme?: 'default' | 'secondary';
};

// type TSandboxState<T> = {
//   state: T & Partial<T>;
//   dispatch: React.Dispatch<Partial<T>>;
// };

// type TSandboxComponent<T> = ({ state, dispatch }: TSandboxState<T>) => JSX.Element;

// function ComponentControls<T extends Partial<TSandboxOptions>>(props: TSandboxState<T>) {
//   const { state, dispatch } = props;
//   return (
//     <div>
//       {Object.keys(state)?.map((key, index) => {
//         if (key in state) {
//           return <button>{state[key]}</button>;
//         }
//       })}
//     </div>
//   );
// }
// export interface IPropsSandbox<T> {
//   Component: TSandboxComponent<T>;
//   initialState: T;
// }
// function Sandbox<T extends Partial<TSandboxOptions>>(props: IPropsSandbox<T>) {
//   const { Component, initialState } = props;
//   const [state, dispatch] = useStateReducer<T>(initialState);
//   return (
//     <div>
//       <ComponentControls state={state} dispatch={dispatch} />
//       <Component state={state} dispatch={dispatch} />
//     </div>
//   );
// }
// <Sandbox
//   initialState={{ align: 'center', size: 'sm' }}
//   Component={({ state }) => {
//     return (
//       <div>
//         <span>Size: {state.size}</span>
//         <span>Align: {state.align}</span>
//       </div>
//     );
//   }}
// />

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <section>
          <Demo />
        </section>
      </Page.Content>
    </Page>
  );
};

const INITIAL_STATE_CHECKBOX: Partial<TSandboxOptions> = {
  align: 'start',
  size: 'sm',
};
const INITIAL_STATE_RADIO: Partial<TSandboxOptions> = {
  align: 'start',
  size: 'sm',
};
const INITIAL_STATE_SWITCH: Partial<TSandboxOptions> = {
  align: 'start',
  size: 'sm',
};
