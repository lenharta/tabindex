import { describe, expect, test } from 'vitest';
import { render, screen } from '@/tests/utils';
import { Radio, RadioGroup } from '@/common/Radio';

describe('[@/common/Radio]', async () => {
  test('renders basic component', async () => {
    const testId = 'Radio-id';
    render(<Radio data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});

describe('[@/common/RadioGroup]', async () => {
  test('renders basic component', async () => {
    const testId = 'RadioGroup-id';
    render(<RadioGroup data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
