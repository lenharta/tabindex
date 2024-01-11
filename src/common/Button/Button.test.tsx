import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Button, ButtonGroup } from '@/common/Button';

describe('[@/common/Button]', async () => {
  test('renders basic component', async () => {
    const testId = 'Button-id';
    render(<Button data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/ButtonGroup]', async () => {
  test('renders basic component', async () => {
    const testId = 'ButtonGroup-id';
    render(<ButtonGroup data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
