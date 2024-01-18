import { createSecureContext } from '@/utils';

export const [CheckboxGroupCTX, useCheckboxGroupCTX] = createSecureContext(
  '[@tabindex/CheckboxGroup]: Component not found in context tree.'
);
