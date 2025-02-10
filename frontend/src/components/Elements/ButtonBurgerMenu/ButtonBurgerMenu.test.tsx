import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';

describe('ButtonBurgerMenu', () => {
  test('renders correctly', () => {
    render(<ButtonBurgerMenu isOpen={false} toggleOpen={() => {}} />);
    expect(
      screen.getByRole('button', { name: /hamburger menu/i }),
    ).toBeInTheDocument();
  });

  test('calls toggleOpen when clicked', () => {
    const toggleOpen = jest.fn();
    render(<ButtonBurgerMenu isOpen={false} toggleOpen={toggleOpen} />);
    fireEvent.click(screen.getByRole('button', { name: /hamburger menu/i }));
    expect(toggleOpen).toHaveBeenCalledTimes(1);
  });

  test('BurgerLine components have correct classes when isOpen is false', () => {
    render(<ButtonBurgerMenu isOpen={false} toggleOpen={() => {}} />);
    const lines = screen.getAllByRole('presentation');
    expect(lines[0]).toHaveClass('top-0 transform rotate-0 translate-y-0');
    expect(lines[1]).toHaveClass('top-2 opacity-100');
    expect(lines[2]).toHaveClass('top-4 transform rotate-0 translate-y-0');
  });

  test('BurgerLine components have correct classes when isOpen is true', () => {
    render(<ButtonBurgerMenu isOpen={true} toggleOpen={() => {}} />);
    const lines = screen.getAllByRole('presentation');
    expect(lines[0]).toHaveClass('top-0 transform rotate-45 translate-y-2');
    expect(lines[1]).toHaveClass('top-2 opacity-0');
    expect(lines[2]).toHaveClass('top-4 transform -rotate-45 -translate-y-2');
  });
});
