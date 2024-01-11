import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', async () => {
  test('<Checkbox /> basics', async () => {
    const testId = 'Checkbox-id';
    render(<Checkbox data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
