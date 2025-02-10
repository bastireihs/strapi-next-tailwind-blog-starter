import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOverlay from '../ImageOverlay/ImageOverlay';

describe('ImageOverlay', () => {
  test('renders correctly', () => {
    render(<ImageOverlay />);
    const overlayElement = screen.getByRole('img', { hidden: true });
    expect(overlayElement).toBeInTheDocument();
  });

  test('applies correct classes', () => {
    render(<ImageOverlay />);
    const overlayElement = screen.getByRole('img', { hidden: true });
    expect(overlayElement).toHaveClass(
      'z-0 absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-dark/40 from-20% to-dark/80 rounded-xl',
    );
  });
});
