export declare namespace TBDX {
  type Mode = 'light' | 'dark';
  
  type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  type SizeCompact = Exclude<Size, 'xs' | 'xl'>;

  type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  type Position = 'top' | 'right' | 'bottom' | 'left';

  type Alignment = 'start' | 'center' | 'end';

  type Justify = 'start' | 'center' | 'end';

  type Placement = Position | `${Position}-${Alignment}`;

  type Orientation = 'vertical' | 'horizontal';

  type Radius = 'xs' | 'sm' | 'md' | 'lg' | 'rd';

  type Surface = 0 | 1 | 2 | 3 | 4 | 5;

  type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

  type FontSize = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

  type FontWeight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

  type Alpha = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5';

  type Shade = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  type Color = 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'indigo' | 'purple' | 'violet' | 'pink' | 'magenta' | 'red';

  type AccentVariantType = 'base' | 'base-interactive';

  type AccentVariantKey = `${Color}-${AccentVariantType}`;

  type AccentShades = `${AccentVariantKey}-${Shade | Alpha}`;

  type SurfaceVariantType = 'base' | 'base-interactive' | 'invert' | 'invert-interactive';

  type SurfaceVariantKey = `surface-${SurfaceVariantType}`;
  
  type SurfaceShades = `${SurfaceVariantKey}-${Shade}`;
}

export const DATA_TBDX_SIZE: TBDX.Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const DATA_TBDX_SIZE_COMPACT: TBDX.SizeCompact[] = ['sm', 'md', 'lg'];

export const DATA_TBDX_SIZE_EXPANDED: TBDX.SizeExpanded[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const DATA_TBDX_ALPHA: TBDX.Alpha[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];

export const DATA_TBDX_SHADE: TBDX.Shade[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const DATA_TBDX_COLOR: TBDX.Color[] = ['orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'purple', 'violet', 'pink', 'magenta', 'red'];

export const DATA_TBDX_SPACING: TBDX.Spacing[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const DATA_TBDX_FONT_SIZE: TBDX.FontSize[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const DATA_TBDX_FONT_WEIGHT: TBDX.FontWeight[] = ['xlt', 'lgt', 'reg', 'med', 'bld', 'xbd'];

export const DATA_TBDX_POSITION: TBDX.Position[] = ['bottom', 'left', 'right', 'top'];

export const DATA_TBDX_ALIGNMENT: TBDX.Alignment[] = ['center', 'start', 'end'];

export const DATA_TBDX_ORIENTATION: TBDX.Orientation[] = ['horizontal', 'vertical'];

export const DATA_TBDX_PLACEMENT_END: TBDX.Placement[] = ['bottom-end', 'left-end', 'right-end', 'top-end'];

export const DATA_TBDX_PLACEMENT_START: TBDX.Placement[] = ['bottom-start', 'left-start', 'right-start', 'top-start'];

export const DATA_TBDX_PLACEMENT_CENTER: TBDX.Placement[] = ['bottom-center', 'left-center', 'right-center', 'top-center'];

export const DATA_TBDX_PLACEMENT: TBDX.Placement[] = [...DATA_TBDX_POSITION, ...DATA_TBDX_PLACEMENT_CENTER, ...DATA_TBDX_PLACEMENT_START, ...DATA_TBDX_PLACEMENT_END];