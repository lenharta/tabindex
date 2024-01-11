import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Close } from './Close';

describe('<Close />', async () => {
  test('<Close /> basics', async () => {
    const testId = 'Close-id';
    render(<Close data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
