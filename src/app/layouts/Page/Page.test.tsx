import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Page } from './Page';

describe('<Page />', async () => {
  test('<Page /> basics', async () => {
    const testId = 'page-id';
    render(<Page data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
