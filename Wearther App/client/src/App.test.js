import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';  // Import the custom matchers.

test('renders the login form', () => {
  render(<App />);
  const loginForm = screen.getByTestId('login-form');
  expect(loginForm).toBeInTheDocument();
  // Alternatively, you can check for a specific piece of text or a label:
  const usernameLabel = screen.getByText(/username:/i);
  expect(usernameLabel).toBeInTheDocument();
});
