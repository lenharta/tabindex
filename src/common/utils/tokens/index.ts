import { TBDX } from '@/types';

export function formatFontSizeClxss(value: TBDX.FontSize): TBDX.FontSizeToken {
  return `fz-${value}`;
}

export function formatFontFamilyClxss(value: TBDX.FontFamily): TBDX.FontFamilyToken {
  return `ff-${value}`;
}

export function formatFontWeightClxss(value: TBDX.FontWeight): TBDX.FontWeightToken {
  return `fw-${value}`;
}
