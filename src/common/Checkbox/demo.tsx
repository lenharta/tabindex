import React from 'react';
import { Checkbox } from './Checkbox';
import { ICheckboxState, IPropsCheckboxGroup } from './types';
import { createModifierClasses } from '@/utils/create-modifier-classes';

export const DemoCheckbox = () => {
  const [checked, setChecked] = React.useState<ICheckboxState['checked']>('false');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
      <Checkbox onChange={setChecked} checked={checked} size="xs" label="Checkbox XS" />
      <Checkbox onChange={setChecked} checked={checked} size="sm" label="Checkbox SM" />
      <Checkbox onChange={setChecked} checked={checked} size="md" label="Checkbox MD" />
      <Checkbox onChange={setChecked} checked={checked} size="lg" label="Checkbox LG" />
      <Checkbox onChange={setChecked} checked={checked} size="xl" label="Checkbox XL" />
    </div>
  );
};

// export const DemoCheckboxGroup = (props: IPropsCheckboxGroup) => {
//   const { onChange, alignment, size } = props;

//   const className = createModifierClasses({
//     base: 'CheckboxGroup',
//     modifiers: { size, alignment },
//   });

//   return (
//     <div className={className}>
//       {value.map((v) => {
//         return <Checkbox checked={v} onChange={onChange} />;
//       })}
//     </div>
//   );
// };
