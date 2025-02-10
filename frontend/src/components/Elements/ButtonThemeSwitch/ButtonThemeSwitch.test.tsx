import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ButtonThemeSwitch from './ButtonThemeSwitch';

// Mock ThemeService
jest.mock('@/lib/services', () => ({
  ThemeService: jest.fn().mockImplementation(() => ({
    useThemeSwitch: jest.fn().mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    }),
  })),
}));

describe('ButtonThemeSwitch', () => {
  it('should render the ButtonThemeSwitch component with light theme', () => {
    render(<ButtonThemeSwitch />);
    const button = screen.getByRole('button', { name: /theme-switcher/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-light text-dark');
  });
});
