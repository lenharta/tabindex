import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Sandbox } from '@/app/components';

describe('[@/app/Sandbox]', async () => {
  test('renders basic component', async () => {
    const testId = 'Sandbox-id';
    render(<Sandbox data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
