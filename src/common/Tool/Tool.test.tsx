import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Tool } from './Tool';

describe('[@/common/Tool]', async () => {
  test('renders basic component', async () => {
    const testId = 'Tool-id';
    render(<Tool data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
