import { Page } from '@/components/layouts';

type ThemeProps = {
  invert?: boolean;
  scheme?: 'primary' | 'secondary' | 'action';
};

type ThemeScheme = 'action' | 'primary' | 'secondary';
type ThemeSchemeLocale = 'base' | 'invert';
type ThemeSchemeKey = `${ThemeScheme}-${ThemeSchemeLocale}`;
type ThemeSchemeLookup = Record<ThemeSchemeKey, string>;

const themeSchemeClasses: ThemeSchemeLookup = {
  'action-base': 'tbdx-action--base',
  'action-invert': 'tbdx-action--invert',
  'primary-base': 'tbdx-primary--base',
  'primary-invert': 'tbdx-primary--invert',
  'secondary-base': 'tbdx-secondary--base',
  'secondary-invert': 'tbdx-secondary--invert',
};

function findSchemeKey(props: ThemeProps): keyof ThemeSchemeLookup {
  const { invert, scheme } = props;
  if (scheme && !invert) {
    return `${scheme}-base`;
  }
  if (scheme && invert) {
    return `${scheme}-invert`;
  }
  return 'primary-base';
  // if (scheme && !invert) return `${scheme}-base`
  // if (scheme && invert) return `${scheme}-invert`
}

const findScheme = (props: ThemeProps) => {
  const { invert, scheme } = props;
  const key = findSchemeKey({ invert, scheme });
  return themeSchemeClasses[key];
};

export function SchemeSwatch(props: ThemeProps) {
  const { invert, scheme } = props;
  const className = findScheme({ invert, scheme });
  return (
    <div
      className={className}
      style={{
        width: 400,
        padding: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <span>{className}</span>
    </div>
  );
}

export function SchemeGallery() {
  return (
    <div>
      <SchemeSwatch scheme="action" />
      <SchemeSwatch scheme="action" invert />
      <SchemeSwatch scheme="primary" />
      <SchemeSwatch scheme="secondary" />
    </div>
  );
}

export default function Toolbox() {
  return (
    <Page>
      <Page.Hero headline="Toolbox" />
      <Page.Content>{/* <SchemeGallery /> */}</Page.Content>
      <Page.Footer />
    </Page>
  );
}

// interface TestComponentProps {
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//   border?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//   shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//   children?: React.ReactNode;
// }

// const TestPropComponent = (props: TestComponentProps) => {
//   const { children, ...otherProps } = props;
//   const { className } = useProps('TestComponent', otherProps, { size: 'sm' }, 'other-class-name');
//   return <div className={className}>Test Component</div>;
// };
