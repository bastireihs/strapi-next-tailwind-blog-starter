import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Routes } from '@/lib/enums/routes.enums';
import CategoryTab from '../CategoryTab/CategoryTab';

describe('CategoryTab', () => {
  test('renders correctly', () => {
    render(<CategoryTab category="test-category" isActive={false} />);
    expect(screen.getByText('test-category')).toBeInTheDocument();
  });

  test('has correct classes when isActive is true', () => {
    render(<CategoryTab category="test-category" isActive={true} />);
    const linkElement = screen.getByText('test-category');
    expect(linkElement).toHaveClass(
      'bg-light text-dark dark:bg-dark dark:text-light border-accent dark:border-accent',
    );
  });

  test('has correct classes when isActive is false', () => {
    render(<CategoryTab category="test-category" isActive={false} />);
    const linkElement = screen.getByText('test-category');
    expect(linkElement).toHaveClass(
      'bg-light text-dark dark:bg-dark dark:text-light border-dark dark:border-light',
    );
  });

  test('renders with correct href', () => {
    render(<CategoryTab category="test-category" isActive={false} />);
    const linkElement = screen.getByText('test-category');
    expect(linkElement.closest('a')).toHaveAttribute(
      'href',
      `${Routes.CATEGORIES}/test-category`,
    );
  });
});
