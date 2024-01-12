import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Page } from './Page';

describe('[@/app/Page]', async () => {
  test('renders basic component', async () => {
    const testId = 'Page-id';
    render(<Page data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
