import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with label", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
