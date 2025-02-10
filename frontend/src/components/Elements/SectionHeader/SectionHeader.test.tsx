import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<SectionHeader heading="Test Heading" />);
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    const { getByText } = render(<SectionHeader heading="Test Heading" />);
    expect(getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <SectionHeader heading="Test Heading">
        <div>Child Element</div>
      </SectionHeader>,
    );
    expect(getByText('Child Element')).toBeInTheDocument();
  });
});
