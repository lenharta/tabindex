import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Control } from './Control';

describe('<Control />', async () => {
  test('<Control /> basics', async () => {
    const testId = 'Control-id';
    render(<Control data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
