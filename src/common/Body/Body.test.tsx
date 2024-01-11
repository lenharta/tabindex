import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Body, UnstyledBody } from '@/common/Body';

describe('[@/common/UnstyledBody]', async () => {
  test('renders basic component', async () => {
    const testId = 'UnstyledBody-id';
    render(<UnstyledBody data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/Body]', async () => {
  test('renders basic component', async () => {
    const testId = 'Body-id';
    render(<Body data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
