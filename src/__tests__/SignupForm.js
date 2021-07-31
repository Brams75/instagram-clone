import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm from "../components/SignupForm";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const setup = () => render(<SignupForm />);

describe("Render SignupForm", () => {
  test("has an input email", () => {
    setup();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
  });
});
