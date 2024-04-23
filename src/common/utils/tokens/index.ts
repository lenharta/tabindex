import { TBDX } from '@/types';

export function formatFontSizeClxss(value: number): TBDX.FontSizeToken | undefined {
  return !value ? undefined : `fz-${value}`;
}

export function formatFontFamilyClxss(value?: TBDX.FontFamily): TBDX.FontFamilyToken | undefined {
  return !value ? undefined : `ff-${value}`;
}

export function formatFontWeightClxss(value: TBDX.FontWeight): TBDX.FontWeightToken | undefined {
  return !value ? undefined : `fw-${value}`;
}
