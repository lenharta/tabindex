import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { SandboxDisplay } from './SandboxDisplay';

describe('[@/app/SandboxDisplay]', async () => {
  test('renders basic component', async () => {
    const testId = 'SandboxDisplay-id';
    render(<SandboxDisplay data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
