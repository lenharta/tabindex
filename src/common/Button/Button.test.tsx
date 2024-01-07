import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Button } from './Button';

describe('<Button />', async () => {
  test('<Button /> basics', async () => {
    const testId = 'button-id';
    render(<Button data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
