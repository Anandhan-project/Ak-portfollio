import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactSection } from '../components/sections/ContactSection';

describe('ContactSection Component', () => {
  it('renders contact section header and form fields', () => {
    render(<ContactSection />);

    expect(screen.getByRole('heading', { name: /Get in Touch & Collaborate/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
  });

  it('validates empty inputs on submit and displays error alerts', async () => {
    render(<ContactSection />);

    const submitBtn = screen.getByRole('button', { name: /Send Transmission/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please provide your name/i)).toBeInTheDocument();
      expect(screen.getByText(/Please provide your email address/i)).toBeInTheDocument();
      expect(screen.getByText(/Please specify a subject/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter your message/i)).toBeInTheDocument();
    });
  });

  it('validates invalid email format', async () => {
    render(<ContactSection />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Your Email/i);
    const submitBtn = screen.getByRole('button', { name: /Send Transmission/i });

    fireEvent.change(nameInput, { target: { value: 'Jane Developer' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email-address' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please provide a valid email format/i)).toBeInTheDocument();
    });
  });
});
