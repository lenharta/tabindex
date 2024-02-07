import {
  type OptionItem,
  type OptionGroup,
  type ParsedOptionItem,
  type ParsedOptionGroup,
  parseOptionItem,
} from './parse-option-item';

export const parseOptionData = (
  data?: (OptionItem | OptionGroup | string | number)[]
): (ParsedOptionItem | ParsedOptionGroup)[] => {
  if (!data) return [];
  return data.map((item) => parseOptionItem(item));
};
