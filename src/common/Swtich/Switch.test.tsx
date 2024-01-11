import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Switch } from './Swtich';

describe('<Switch />', async () => {
  test('<Switch /> basics', async () => {
    const testId = 'Switch-id';
    render(<Switch data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
