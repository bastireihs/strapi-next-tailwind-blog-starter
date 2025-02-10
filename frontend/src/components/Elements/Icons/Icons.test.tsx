import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconSun, IconMoon, IconLinkedin, IconGithub } from '../Icons/Icons';

describe('Icons', () => {
  test('IconSun renders correctly', () => {
    render(<IconSun />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  test('IconSun applies className correctly', () => {
    render(<IconSun className="test-class" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toHaveClass('test-class');
  });

  test('IconMoon renders correctly', () => {
    render(<IconMoon />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  test('IconMoon applies className correctly', () => {
    render(<IconMoon className="test-class" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toHaveClass('test-class');
  });

  test('IconLinkedin renders correctly', () => {
    render(<IconLinkedin />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  test('IconLinkedin applies className correctly', () => {
    render(<IconLinkedin className="test-class" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toHaveClass('test-class');
  });

  test('IconGithub renders correctly', () => {
    render(<IconGithub />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  test('IconGithub applies className correctly', () => {
    render(<IconGithub className="test-class" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toHaveClass('test-class');
  });
});
