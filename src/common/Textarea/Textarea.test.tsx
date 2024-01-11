import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Textarea } from '@/common/Textarea';

describe('[@/common/Textarea]', async () => {
  test('renders basic component', async () => {
    const testId = 'Textarea-id';
    render(<Textarea data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
