// import {
//   type TCheckboxValue,
//   type TCheckboxStatus,
//   type TCheckboxVariant,
//   type TCheckboxIconName,
// } from './Checkbox.types';

// const DATA_CHECKBOX_ICONS: Record<TCheckboxStatus, Record<TCheckboxVariant, TCheckboxIconName>> = {
//   checked: { filled: 'square_check_fill', outlined: 'square_check' },
//   unchecked: { filled: 'square_fill', outlined: 'square' },
//   indeterminate: { filled: 'square_dash_fill', outlined: 'square_dash' },
// };

// const valueData: TCheckboxValue[] = ['true', 'false', 'indeterminate'];
// const statusData: TCheckboxStatus[] = ['checked', 'unchecked', 'indeterminate'];

// const checkboxValueToStatus = (checked: TCheckboxValue): TCheckboxStatus => {
//   return statusData[valueData.indexOf(checked)];
// };

// const checkboxStatusToValue = (status: TCheckboxStatus): TCheckboxValue => {
//   return valueData[statusData.indexOf(status)];
// };

// const checkboxIconLookup = (checked?: TCheckboxValue, variant?: TCheckboxVariant) => {
//   const _checked = checked || 'false';
//   const _variant = variant || 'outlined';
//   const _status = checkboxValueToStatus(_checked);
//   return DATA_CHECKBOX_ICONS[_status][_variant];
// };

// export { DATA_CHECKBOX_ICONS, checkboxStatusToValue, checkboxValueToStatus, checkboxIconLookup };
