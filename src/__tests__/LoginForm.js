import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(screen.getByRole("textbox", { name: /username/i })).toBeInTheDocument();
  });
  test("can write in username input ", () => {
    setup();
    const input = screen.getByRole("textbox", { name: /username/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");

    userEvent.clear(input);
    expect(input).toHaveValue("");
  });

  test("can write in password input ", () => {
    setup();
    const input = screen.getByLabelText(/password/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");

    userEvent.clear(input);
    expect(input).toHaveValue("");
  });
  test("has a button", () => {
    setup();
    expect(screen.getByRole("button", { name: /connexion/i })).toBeInTheDocument();
  });
});
