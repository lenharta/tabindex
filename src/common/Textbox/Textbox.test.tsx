import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Textbox } from './Textbox';

describe('<Textbox />', async () => {
  test('<Textbox /> basics', async () => {
    const testId = 'Textbox-id';
    render(<Textbox data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
