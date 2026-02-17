// src/__tests__/login.test.jsx
import { render, screen } from "@testing-library/react";
import Login from "../pages/Login.jsx"; // adjust path if needed

describe("Login Component", () => {
  it("renders login heading", () => {
    render(<Login />);
    // Check the heading specifically
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  it("renders email and password inputs", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
