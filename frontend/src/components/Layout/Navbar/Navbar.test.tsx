import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

jest.mock('@/components/Elements', () => ({
  ButtonBurgerMenu: jest.fn(({ isOpen, toggleOpen }) => (
    <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
  )),
}));

const linksMock = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
];

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar currentPathname="/" links={linksMock} />);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('should open and close the navbar when the burger menu is clicked', () => {
    render(<Navbar currentPathname="/" links={linksMock} />);
    const button = screen.getByText('Open');
    fireEvent.click(button);
    expect(screen.getByText('Close')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('should close the navbar when a link is clicked', () => {
    render(<Navbar currentPathname="/" links={linksMock} />);
    const button = screen.getByText('Open');
    fireEvent.click(button);
    expect(screen.getByText('Close')).toBeInTheDocument();
    const link = screen.getByText('Home');
    fireEvent.click(link);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('should close the navbar when clicking outside', () => {
    render(<Navbar currentPathname="/" links={linksMock} />);
    const button = screen.getByText('Open');
    fireEvent.click(button);
    expect(screen.getByText('Close')).toBeInTheDocument();
    fireEvent.mouseDown(document);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });
});
