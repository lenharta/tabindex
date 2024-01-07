import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Body } from './Body';

describe('<Body />', async () => {
  test('<Body /> basics', async () => {
    const testId = 'body-id';
    render(<Body data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
