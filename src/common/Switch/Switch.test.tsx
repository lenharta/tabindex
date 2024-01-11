import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Switch, SwitchGroup } from '@/common/Switch';

describe('[@/common/Switch]', async () => {
  test('renders basic component', async () => {
    const testId = 'Switch-id';
    render(<Switch data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/SwitchGroup]', async () => {
  test('renders basic component', async () => {
    const testId = 'SwitchGroup-id';
    render(<SwitchGroup data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
