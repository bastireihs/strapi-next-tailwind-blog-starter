import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Size } from '@/lib/enums';

import Tag from './Tag';

describe('Tag', () => {
  it('should render the Tag component with default size', () => {
    render(<Tag name="Test Tag" />);
    const tagElement = screen.getByText('Test Tag');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('text-sm sm:text-xl');
  });

  it('should render the Tag component with small size', () => {
    render(<Tag name="Test Tag" size={Size.SM} />);
    const tagElement = screen.getByText('Test Tag');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('text-xs sm:text-base md:text-lg');
  });

  it('should render the Tag component with large size', () => {
    render(<Tag name="Test Tag" size={Size.LG} />);
    const tagElement = screen.getByText('Test Tag');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('text-base sm:text-2xl md:text-2xl');
  });

  it('should render the Tag component with a link', () => {
    render(<Tag name="Test Tag" link="/test-link" />);
    const tagElement = screen.getByText('Test Tag');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement.closest('a')).toHaveAttribute('href', '/test-link');
  });
});
