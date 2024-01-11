import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Textarea } from './Textarea';

describe('<Textarea />', async () => {
  test('<Textarea /> basics', async () => {
    const testId = 'Textarea-id';
    render(<Textarea data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
