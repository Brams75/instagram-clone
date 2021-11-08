import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

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

const setup = () => render(<LoginForm />);

describe("Render LoginForm", () => {
  test("has an input username", () => {
    setup();
    const textbox = screen.getByRole("textbox", { name: /username/i });
    expect(textbox).toBeInTheDocument();
    expect(true).toBeTruthy();
  });
});
