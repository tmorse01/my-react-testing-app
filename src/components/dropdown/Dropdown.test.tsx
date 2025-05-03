import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import { expect, test, vi } from "vitest";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

test("renders dropdown with label when provided", () => {
  render(
    <Dropdown
      label="Select item"
      options={mockOptions}
      value=""
      onChange={() => {}}
    />
  );
  expect(screen.getByText("Select item")).toBeInTheDocument();
});

test("renders dropdown with placeholder when no value is selected", () => {
  render(
    <Dropdown
      options={mockOptions}
      value=""
      onChange={() => {}}
      placeholder="Choose an option"
    />
  );
  expect(screen.getByTestId("dropdown-selected-value")).toHaveTextContent(
    "Choose an option"
  );
});

test("renders selected option label when value is selected", () => {
  render(
    <Dropdown options={mockOptions} value="option2" onChange={() => {}} />
  );
  expect(screen.getByTestId("dropdown-selected-value")).toHaveTextContent(
    "Option 2"
  );
});

test("opens options list when dropdown is clicked", () => {
  render(<Dropdown options={mockOptions} value="" onChange={() => {}} />);

  // Options should be hidden initially
  expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();

  // Click to open dropdown
  fireEvent.click(screen.getByTestId("dropdown-select"));
  expect(screen.getByTestId("dropdown-options")).toBeInTheDocument();
  expect(screen.getByText("Option 1")).toBeInTheDocument();
  expect(screen.getByText("Option 2")).toBeInTheDocument();
  expect(screen.getByText("Option 3")).toBeInTheDocument();
});

test("calls onChange when an option is selected", () => {
  const handleChange = vi.fn();
  render(<Dropdown options={mockOptions} value="" onChange={handleChange} />);

  // Open dropdown
  fireEvent.click(screen.getByTestId("dropdown-select"));

  // Select an option
  fireEvent.click(screen.getByTestId("dropdown-option-option2"));
  expect(handleChange).toHaveBeenCalledWith("option2");
});

test("closes options list after selecting an option", () => {
  render(<Dropdown options={mockOptions} value="" onChange={() => {}} />);

  // Open dropdown
  fireEvent.click(screen.getByTestId("dropdown-select"));
  expect(screen.getByTestId("dropdown-options")).toBeInTheDocument();

  // Select an option
  fireEvent.click(screen.getByTestId("dropdown-option-option1"));
  expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
});

test("doesn't open options list when disabled", () => {
  render(
    <Dropdown
      options={mockOptions}
      value=""
      onChange={() => {}}
      disabled={true}
    />
  );

  fireEvent.click(screen.getByTestId("dropdown-select"));
  expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
});

test("applies disabled class when dropdown is disabled", () => {
  render(
    <Dropdown
      options={mockOptions}
      value=""
      onChange={() => {}}
      disabled={true}
    />
  );

  expect(
    screen.getByTestId("dropdown-select").classList.contains("disabled")
  ).toBe(true);
});
