import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { expect, test, vi } from "vitest";

test("renders input with label when provided", () => {
  render(<Input label="Username" value="" onChange={() => {}} />);
  expect(screen.getByText("Username")).toBeInTheDocument();
});

test("renders input without label when not provided", () => {
  render(<Input value="" onChange={() => {}} />);
  expect(screen.queryByRole("label")).not.toBeInTheDocument();
});

test("renders input with placeholder", () => {
  render(<Input value="" onChange={() => {}} placeholder="Enter username" />);
  expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
});

test("calls onChange handler when value changes", () => {
  const handleChange = vi.fn();
  render(<Input value="" onChange={handleChange} />);

  const input = screen.getByTestId("input-field");
  fireEvent.change(input, { target: { value: "test-value" } });

  expect(handleChange).toHaveBeenCalledWith("test-value");
});

test("applies disabled attribute when disabled prop is true", () => {
  render(<Input value="" onChange={() => {}} disabled={true} />);
  expect(screen.getByTestId("input-field")).toBeDisabled();
});

test("renders error message when error prop is provided", () => {
  render(<Input value="" onChange={() => {}} error="This field is required" />);
  expect(screen.getByTestId("input-error")).toHaveTextContent(
    "This field is required"
  );
});

test("does not render error message when error prop is not provided", () => {
  render(<Input value="" onChange={() => {}} />);
  expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
});

test("sets aria-invalid attribute when error is provided", () => {
  render(<Input value="" onChange={() => {}} error="Error message" />);
  expect(screen.getByTestId("input-field")).toHaveAttribute(
    "aria-invalid",
    "true"
  );
});

test("associates label with input via id", () => {
  render(<Input label="Username" value="" onChange={() => {}} />);
  const label = screen.getByText("Username");
  expect(label.tagName).toBe("LABEL");
  expect(label).toHaveAttribute("for", "username");
});
