import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormattedDate from './FormattedDate';

describe('FormattedDate', () => {
  it('renders the date in the default format', () => {
    const { getByText } = render(<FormattedDate date="2023-10-01" />);
    expect(getByText('01.10.2023')).toBeInTheDocument();
  });

  it('renders the date in a custom format', () => {
    const { getByText } = render(
      <FormattedDate date="2023-10-01" format="YYYY/MM/DD" />,
    );
    expect(getByText('2023/10/01')).toBeInTheDocument();
  });

  it('applies default styles when className is not provided', () => {
    const { container } = render(<FormattedDate date="2023-10-01" />);
    expect(container.firstChild).toHaveClass(
      'font-os font-semibold text-dark/50 dark:text-light/50 text-sm sm:text-base',
    );
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <FormattedDate date="2023-10-01" className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
