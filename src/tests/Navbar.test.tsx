import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';

describe('Navbar Component', () => {
  it('renders developer brand logo and navigation items', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('renders theme toggle button and switches theme', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const themeButton = screen.getAllByLabelText(/Switch to|Toggle theme/i)[0];
    expect(themeButton).toBeInTheDocument();
    fireEvent.click(themeButton);
  });
});
