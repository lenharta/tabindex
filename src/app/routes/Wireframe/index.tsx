import { Page } from '@/components/layouts';

type WireBoxType = 'box' | 'section' | 'paragraph' | 'row' | 'column';
type WireComponentType = 'button' | 'icon' | 'text' | 'title';

type ThemeProps = {
  invert?: boolean;
  surface?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  style?: React.CSSProperties;
};

type WireBoxProps = ThemeProps & {
  type?: WireBoxType;
  children?: React.ReactNode;
};

type WireComponentProps = ThemeProps & {
  type?: WireComponentType;
};

const clxss = (...names: string[]) => names.join(' ').trimEnd();

const useThemeProps = (props: ThemeProps & { type?: WireBoxType | WireComponentType }) => {
  const { type, invert, surface = 0 } = props;
  const typeCss = type ? `tbdx-wireframe-${type}` : '';
  const surfaceCss = `tbdx-surface-${surface}${invert ? '-inverted' : ''}`;
  const className = clxss(typeCss, surfaceCss);
  return { className };
};

const Box = (props: WireBoxProps) => {
  const { style, children, ...otherProps } = props;
  const themeProps = useThemeProps(otherProps);
  return (
    <div {...themeProps} style={style}>
      {children}
    </div>
  );
};

const Component = (props: WireComponentProps) => {
  const { style, type = 'text', surface = 1, invert } = props;
  const themeProps = useThemeProps({ type, surface, invert });
  return <div {...themeProps} style={style} />;
};

const sampleWireframe = (
  <Box type="section">
    <Box type="row" style={{ width: '40%' }}>
      <Component type="title" surface={2} />
    </Box>
    <Box type="paragraph">
      <Component type="text" style={{ width: '100%' }} />
      <Component type="text" style={{ width: '100%' }} />
      <Component type="text" style={{ width: '60%' }} />
    </Box>
    <Box type="row" style={{ width: '60%' }}>
      <Component type="button" surface={2} />
      <Component type="button" surface={3} />
    </Box>
  </Box>
);

type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SurfaceLevelClxss = `tbdx-surface-${SurfaceLevel}` | `tbdx-surface-${SurfaceLevel}-invert`;
const surfaceLevelData: SurfaceLevel[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const handleSwatchClassName = (level: SurfaceLevel, invert?: boolean) => {
  const base = `tbdx-surface-swatch`;
  const inverted = invert ? '-invert' : '';
  const surface: SurfaceLevelClxss = `tbdx-surface-${level}${inverted}`;
  return [base, surface].join(' ').trimEnd();
};

const SurfaceSwatch = (props: { level?: SurfaceLevel; invert?: boolean }) => {
  const { level = 0, invert } = props;
  const surfaceClxss = handleSwatchClassName(level, invert);
  const label = <span>Surface 0{level}</span>;
  return <div className={surfaceClxss}>{label}</div>;
};

const buildSwatchClxss = (key: string = 'surface', level: string = '0') => {
  return `tbdx-swatch tbdx-${key}-${level}`;
};

const colorKeys = [
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'violet',
  'pink',
  'magenta',
  'red',
];

type ShadeKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type ColorSurfaceKey = 'surface' | 'surface-invert';
type ColorKey =
  | 'orange'
  | 'yellow'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'violet'
  | 'pink'
  | 'magenta'
  | 'red';

type SwatchProps = {};

// const ColorSwatch = (props: { colorKey: ColorKey | ColorSurfaceKey; shadeKey: ShadeKey }) => {
//   const { colorKey, shadeKey } = props;
//   const clxss = `tbdx-swatch tbdx-${color}-${shade}`;
// };

export default function Wireframe() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Wireframe" />
      <Page.Content>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={buildSwatchClxss('surface', '0')}>surface-0</div>
            <div className={buildSwatchClxss('surface', '1')}>surface-1</div>
            <div className={buildSwatchClxss('surface', '2')}>surface-2</div>
            <div className={buildSwatchClxss('surface', '3')}>surface-3</div>
            <div className={buildSwatchClxss('surface', '4')}>surface-4</div>
            <div className={buildSwatchClxss('surface', '5')}>surface-5</div>
            <div className={buildSwatchClxss('surface', '6')}>surface-6</div>
            <div className={buildSwatchClxss('surface', '7')}>surface-7</div>
            <div className={buildSwatchClxss('surface', '8')}>surface-8</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={buildSwatchClxss('surface-invert', '0')}>surface-invert-0</div>
            <div className={buildSwatchClxss('surface-invert', '1')}>surface-invert-1</div>
            <div className={buildSwatchClxss('surface-invert', '2')}>surface-invert-2</div>
            <div className={buildSwatchClxss('surface-invert', '3')}>surface-invert-3</div>
            <div className={buildSwatchClxss('surface-invert', '4')}>surface-invert-4</div>
            <div className={buildSwatchClxss('surface-invert', '5')}>surface-invert-5</div>
            <div className={buildSwatchClxss('surface-invert', '6')}>surface-invert-6</div>
            <div className={buildSwatchClxss('surface-invert', '7')}>surface-invert-7</div>
            <div className={buildSwatchClxss('surface-invert', '8')}>surface-invert-8</div>
          </div>
        </div>
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
}
