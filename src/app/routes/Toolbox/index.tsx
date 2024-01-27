import { Button, ButtonProps, Title } from '@/components/common';
import { useThemeCTX } from '@/core/theme';
import { useProps } from '@/hooks';

export function ModeButton() {
  const theme = useThemeCTX();
  return (
    <Button scheme="secondary" onClick={theme.toggle}>
      Change Mode
    </Button>
  );
}

const groupProps: Record<number, Partial<ButtonProps>> = {
  1: { size: 'sm', scheme: 'primary', label: 'Primary' },
  2: { size: 'sm', scheme: 'action', label: 'Action' },
  3: { size: 'sm', scheme: 'secondary', label: 'Secondary' },
};

const TitleDemo = () => {
  return (
    <div>
      <div>
        <Title h2>Title Demo</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid', placeContent: 'start' }}>
          <Title h1>Title Level 1</Title>
          <Title h2>Title Level 2</Title>
          <Title h3>Title Level 3</Title>
          <Title h4>Title Level 4</Title>
          <Title h5>Title Level 5</Title>
          <Title h6>Title Level 6</Title>
        </div>
      </div>
    </div>
  );
};

export function ButtonDemo() {
  return (
    <div>
      <div>
        <Title h2>Buttons</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid', placeContent: 'start' }}>
          <Button {...groupProps[1]} />
          <Button {...groupProps[1]} />
          <Button {...groupProps[1]} />
          <Button {...groupProps[1]} />
          <Button {...groupProps[1]} />
        </div>
        <div style={{ display: 'grid', placeContent: 'start' }}>
          <Button {...groupProps[2]} />
          <Button {...groupProps[2]} />
          <Button {...groupProps[2]} />
          <Button {...groupProps[2]} />
          <Button {...groupProps[2]} />
        </div>
        <div style={{ display: 'grid', placeContent: 'start' }}>
          <Button {...groupProps[3]} />
          <Button {...groupProps[3]} />
          <Button {...groupProps[3]} />
          <Button {...groupProps[3]} />
          <Button {...groupProps[3]} />
        </div>
      </div>
    </div>
  );
}

interface TestComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

const TestPropComponent = (props: TestComponentProps) => {
  const { children, ...otherProps } = props;
  const { className } = useProps('TestComponent', otherProps, { size: 'sm' }, 'other-class-name');
  return <div className={className}>Test Component</div>;
};

export default function Toolbox() {
  return (
    <div>
      <TestPropComponent />
      <Title h1>Toolbox</Title>
      <ModeButton />
      <ButtonDemo />
      <TitleDemo />
    </div>
  );
}
