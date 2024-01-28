import { Button, ButtonProps } from '@/components/common';

export function Schemes() {
  return (
    <div style={{ padding: 40 }}>
      <Button scheme="action" label="Action" />
      <Button scheme="primary" label="Primary" />
      <Button scheme="secondary" label="Secondary" />
    </div>
  );
}

export function States({ scheme }: { scheme: ButtonProps['scheme'] }) {
  return (
    <div style={{ padding: 40 }}>
      <Button scheme={scheme} label="Default" />
      <Button scheme={scheme} label="Default" disabled />
      <Button scheme={scheme} label="Default" readonly />
    </div>
  );
}
