import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Checkbox, CheckboxGroup } from '@/common/Checkbox';

describe('[@/common/Checkbox]', async () => {
  test('renders basic component', async () => {
    const testId = 'Checkbox-id';
    render(<Checkbox data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/CheckboxGroup]', async () => {
  test('renders basic component', async () => {
    const testId = 'CheckboxGroup-id';
    render(<CheckboxGroup data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
