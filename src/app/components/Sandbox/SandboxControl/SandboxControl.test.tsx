import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { SandboxControl } from './SandboxControl';

describe('[@/app/SandboxControl]', async () => {
  test('renders basic component', async () => {
    const testId = 'SandboxControl-id';
    render(<SandboxControl data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
