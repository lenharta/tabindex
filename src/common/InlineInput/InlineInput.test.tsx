import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { InlineInput } from './InlineInput';

describe('<InlineInput />', async () => {
  test('<InlineInput /> basics', async () => {
    const testId = 'InlineInput-id';
    render(<InlineInput data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
