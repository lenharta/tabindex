import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Title } from './Title';

describe('<Title />', async () => {
  test('<Title /> basics', async () => {
    const testId = 'title-id';
    render(<Title data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
