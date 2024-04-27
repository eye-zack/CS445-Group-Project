import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import the custom matchers.
import Login from "./Components/Login";
import { BrowserRouter as Router } from "react-router-dom";

test("renders the login form", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const loginForm = screen.getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();
  // Alternatively, you can check for a specific piece of text or a label:
  const usernameLabel = screen.getByText(/username:/i);
  expect(usernameLabel).toBeInTheDocument();
});
