import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { expect, test, vi } from "vitest";

test("renders button with label", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test("applies primary variant class by default", () => {
  render(<Button label="Click Me" />);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveClass("button-primary");
});

test("applies specified variant class when provided", () => {
  render(<Button label="Click Me" variant="secondary" />);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveClass("button-secondary");
});

test("applies medium size class by default", () => {
  render(<Button label="Click Me" />);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveClass("button-medium");
});

test("applies specified size class when provided", () => {
  render(<Button label="Click Me" size="large" />);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveClass("button-large");
});

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disables button when disabled prop is true", () => {
  render(<Button label="Click Me" disabled={true} />);
  const button = screen.getByText(/click me/i);
  expect(button).toBeDisabled();
  expect(button).toHaveClass("button-disabled");
});

test("applies custom class name when provided", () => {
  render(<Button label="Click Me" className="custom-class" />);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveClass("custom-class");
});
