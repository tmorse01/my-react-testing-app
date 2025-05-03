import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import { expect, test, vi } from "vitest";

test("renders modal when isOpen is true", () => {
  render(
    <Modal isOpen={true} title="Test Modal" onClose={() => {}}>
      <div>Modal content</div>
    </Modal>
  );

  expect(screen.getByText("Test Modal")).toBeInTheDocument();
  expect(screen.getByText("Modal content")).toBeInTheDocument();
});

test("does not render modal when isOpen is false", () => {
  render(
    <Modal isOpen={false} title="Test Modal" onClose={() => {}}>
      <div>Modal content</div>
    </Modal>
  );

  expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
});

test("calls onClose when close button is clicked", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen={true} title="Test Modal" onClose={handleClose}>
      <div>Modal content</div>
    </Modal>
  );

  fireEvent.click(screen.getByTestId("modal-close-button"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("calls onClose when overlay is clicked", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen={true} title="Test Modal" onClose={handleClose}>
      <div>Modal content</div>
    </Modal>
  );

  fireEvent.click(screen.getByTestId("modal-overlay"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("does not call onClose when modal content is clicked", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen={true} title="Test Modal" onClose={handleClose}>
      <div data-testid="modal-test-content">Modal content</div>
    </Modal>
  );

  fireEvent.click(screen.getByTestId("modal-container"));
  fireEvent.click(screen.getByTestId("modal-test-content"));
  expect(handleClose).not.toHaveBeenCalled();
});

test("applies correct size class based on size prop", () => {
  render(
    <Modal isOpen={true} title="Test Modal" onClose={() => {}} size="large">
      <div>Modal content</div>
    </Modal>
  );

  const container = screen.getByTestId("modal-container");
  expect(container.classList.contains("modal-large")).toBe(true);
});

test("calls onClose when Escape key is pressed", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen={true} title="Test Modal" onClose={handleClose}>
      <div>Modal content</div>
    </Modal>
  );

  fireEvent.keyDown(document, { key: "Escape" });
  expect(handleClose).toHaveBeenCalledTimes(1);
});
