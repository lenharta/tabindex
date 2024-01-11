import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Radio } from './Radio';

describe('<Radio />', async () => {
  test('<Radio /> basics', async () => {
    const testId = 'Radio-id';
    render(<Radio data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
