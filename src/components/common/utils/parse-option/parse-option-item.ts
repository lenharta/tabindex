export interface OptionItem {
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface OptionGroup {
  group: string;
  items: (OptionItem | string)[];
}

export interface ParsedOptionItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ParsedOptionGroup {
  group: string;
  items: OptionItem[];
}

export const parseOptionItem = (
  option: OptionItem | OptionGroup | string | number
): ParsedOptionItem | ParsedOptionGroup => {
  if (typeof option === 'number') {
    return {
      label: (option as number).toString(),
      value: (option as number).toString(),
    };
  }

  if (typeof option === 'string') {
    return {
      label: option as string,
      value: option as string,
    };
  }

  if (!('label' in option)) {
    if (typeof option === 'number') {
      return {
        label: (option as number).toString(),
        value: (option as number).toString(),
      };
    }
    if (typeof option === 'string') {
      return {
        label: option as string,
        value: option as string,
      };
    }
  }

  if ('group' in option) {
    return {
      group: option.group,
      items: option.items.map((item) => parseOptionItem(item)) as ParsedOptionItem[],
    };
  }

  return option as ParsedOptionItem;
};
