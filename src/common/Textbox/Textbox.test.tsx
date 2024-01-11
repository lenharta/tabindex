import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Textbox } from '@/common/Textbox';

describe('[@/common/Textbox]', async () => {
  test('renders basic component', async () => {
    const testId = 'Textbox-id';
    render(<Textbox data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
