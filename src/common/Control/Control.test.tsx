import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Control, ControlGroup } from '@/common/Control';

describe('[@/common/Control]', async () => {
  test('renders basic component', async () => {
    const testId = 'Control-id';
    render(<Control data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/ControlGroup]', async () => {
  test('renders basic component', async () => {
    const testId = 'ControlGroup-id';
    render(<ControlGroup data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
