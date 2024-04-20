import { TBDX } from '@/types';

export const getFontSizeToken = (value: TBDX.FontSize): TBDX.FontSizeToken => `fz-${value}`;

export const getFontFamilyToken = (value: TBDX.FontFamily): TBDX.FontFamilyToken => `ff-${value}`;

export const getFontWeightToken = (value: TBDX.FontWeight): TBDX.FontWeightToken => `fw-${value}`;
