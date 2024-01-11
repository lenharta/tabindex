import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Title, UnstyledTitle } from '@/common/Title';

describe('[@/common/UnstyledTitle]', async () => {
  test('renders basic component', async () => {
    const testId = 'UnstyledTitle-id';
    render(<UnstyledTitle data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/Title]', async () => {
  test('renders basic component', async () => {
    const testId = 'Title-id';
    render(<Title data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
