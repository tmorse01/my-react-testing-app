import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";
import { expect, test, vi } from "vitest";

test("renders card with title", () => {
  render(<Card title="Test Title" />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
});

test("renders card with description when provided", () => {
  render(<Card title="Test Title" description="Test Description" />);
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});

test("does not render description when not provided", () => {
  render(<Card title="Test Title" />);
  const card = screen.getByTestId("card");
  expect(card.querySelector(".card-description")).toBeNull();
});

test("applies custom class name when provided", () => {
  render(<Card title="Test Title" className="custom-class" />);
  const card = screen.getByTestId("card");
  expect(card.classList.contains("custom-class")).toBe(true);
});

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<Card title="Test Title" onClick={handleClick} />);
  fireEvent.click(screen.getByTestId("card"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
