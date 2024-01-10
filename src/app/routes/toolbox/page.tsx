import { Page } from '@/app/layouts';
import React from 'react';

// export type TCheckboxAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
// export type TCheckboxGroup = React.HTMLAttributes<HTMLDivElement>;

// type TStateCheckbox = 'true' | 'false' | 'mixed';

// type TPropsCheckbox = {
//   value?: TStateCheckbox;
//   label?: string;
//   readonly?: boolean;
//   disabled?: boolean;
//   onChange?: (value: TStateCheckbox) => void;
// };

// type TPropsCheckboxGroup = {
//   value: TStateCheckbox[];
//   onChange: (value: TStateCheckbox[]) => void;
// };

// const defaultCheckboxState: TStateCheckbox[] = ['false', 'true', 'false', 'false', 'mixed'];

// const ToolboxCheckbox = (props: TCheckboxAttributes & TPropsCheckbox) => {
//   const { label, onChange, onKeyDown, value, disabled, readonly } = props;

//   const indeterminate = value === 'mixed';
//   const checked = value === 'true';

//   const handleChange = () => {
//     const next = checked ? 'false' : 'true';
//     onChange?.(next);
//   }

//   const handleIndeterminateChange = () => {
//    const next = indeterminate ? 'false' : 'mixed';
//    onChange?.(next);
//   }

//   const dataProps = {
//     'data-readonly': readonly,
//     'data-disabled': disabled,
//     'data-checked': checked
//   }

//   const ariaProps = {
//     'aria-label': label || value,
//     'aria-checked': checked,
//     'aria-readonly': readonly,
//     'aria-disabled': disabled,
//   }

//   return (
//     <button role='checkbox'>
//     </button>
//   )
// }

// type TPropsCheckbox = {
//   value?: string;
//   label?: string;
//   onChange?: (value: string) => void;
// };

// const Checkbox = (props: TPropsCheckbox) => {
//   const { value, label, onChange } = props;

//   const checked = value === 'true';
//   const next = checked ? 'false' : 'true';

//   return <button role="checkbox">{checked ? 'checked' : 'unchecked'}</button>;
// };

// function useInputStateMiddleware<T extends string>(dispatch: TDispatch<T[]>) {
//   const add = (index: number, item: T) => {
//     return dispatch((current) => {
//       return [...current.slice(0, index), item, ...current.slice(index)];
//     });
//   };

//   const update = (index: number, item: T) => {
//     return dispatch((current) => {
//       const clone = [...current];
//       clone[index] = item;
//       return clone;
//     });
//   };

//   const remove = (item: T) => {
//     return dispatch((current) => {
//       return current.filter((value) => value !== item);
//     });
//   };

//   return { add, update, remove } as const;
// }

export type TDispatch<T> = (value: T | ((current: T) => T)) => void;

export interface IState<T> {
  dispatch: TDispatch<T>;
  state: T;
}

// export function useCheckboxMiddlewares<T extends string>({ state, dispatch }: IState<T[]>) {
//   const add = (value: T) => dispatch((current) => [...current, value]);

//   const remove = (value: T) => dispatch((current) => current.filter((v) => v !== value));

//   const update = (value: T) => (state.includes(value) ? remove(value) : add(value));

//   const includes = (value: T) => (state.includes(value) ? true : false);

//   return { add, remove, update, includes } as const;
// }

const DEMO_COLORS = {
  yellow: '#f1c21b',
  black: '#000000',
  white: '#ffffff',
  blue: '#0f62fe',
};

function buildSelectedStyles<T extends React.CSSProperties>(isSelected: boolean): T {
  const styleBase = { cursor: 'pointer', border: 'solid 2px transparent' };

  const lookup = {
    default: {
      ...styleBase,
      ...{ backgroundColor: DEMO_COLORS.blue, color: DEMO_COLORS.white },
    },
    selected: {
      ...styleBase,
      ...{ backgroundColor: DEMO_COLORS.white, color: DEMO_COLORS.black },
    },
  };

  return lookup[isSelected ? 'selected' : 'default'] as T;
}

export interface IOptionItem {
  value: string;
  label?: string;
  disabled?: string;
  readonly?: string;
}

export interface IOptionItemParsed {
  value: string;
  label: string;
  disabled?: string;
  readonly?: string;
}

// interface IPropsCheckboxGroup {
//   onChange: TDispatch<string[]>;
//   items: string[];
// }

// const CheckboxGroup = (props: IPropsCheckboxGroup) => {
//   const { items, onChange } = props;

//   const middlewares = useCheckboxMiddlewares({
//     dispatch: onChange,
//     state: items,
//   });

//   return (
//     <div>
//       {items.map((item, index) => {
//         const key = `${String(item + index)}`;
//         return (
//           <Checkbox
//             key={key}
//             option={item}
//             selected={middlewares.includes(item)}
//             onClick={() => middlewares.update(item)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// interface IPropsCheckbox {
//   option: string;
//   onClick: () => void;
//   selected?: boolean;
//   disabled?: boolean;
//   readonly?: boolean;
// }

// interface IPropsInlineInput {
//   option: string;
//   selected?: boolean;
//   disabled?: boolean;
//   readonly?: boolean;
// }

// const useInlineInputProps = (props: IPropsInlineInput) => {
//   const { value, disabled, readonly, selected } = props;

//   const dataProps = {
//     'data-selected': selected,
//     'data-disabled': disabled,
//     'data-readonly': readonly,
//   };

//   const ariaProps = {
//     // come back to this for complex data
//     'aria-label': value,
//     'aria-selected': selected,
//     'aria-disabled': disabled,
//     'aria-readonly': readonly,
//   };

//   return {
//     ...dataProps,
//     ...ariaProps,
//   };
// };

// const Checkbox = (props: IPropsCheckbox) => {
//   const { onClick, value, selected, disabled, readonly } = props;
//   const inputProps = useInlineInputProps({ value, disabled, readonly, selected });

//   return (
//     <button role="checkbox" onClick={onClick} {...inputProps}>
//       {value}
//     </button>
//   );
// };

// const ToolboxCheckboxes = () => {
//   const [items, setItems] = React.useState<string[]>([]);
//   const options = ['apples', 'peaches', 'bananas', 'grapes', 'oranges'];
//   return (
//     <CheckboxGroup items={} />
//   )
// };

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="" />
      <Page.Content></Page.Content>
    </Page>
  );
};
