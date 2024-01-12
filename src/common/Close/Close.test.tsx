import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Close } from '@/common/Close';

describe('[@/common/Close]', async () => {
  test('renders basic component', async () => {
    const testId = 'Close-id';
    render(<Close data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
