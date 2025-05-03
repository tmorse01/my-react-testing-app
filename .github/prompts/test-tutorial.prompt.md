# React Component Test Generator

## Overview

This prompt guides you through creating React components with TypeScript and corresponding test files using Vitest and React Testing Library. Use this prompt when you want to generate new components with proper test coverage.

## Component Structure

Components should follow this structure:

- Each component lives in its own directory under `/src/components/`
- Component file named as `ComponentName.tsx`
- Test file named as `ComponentName.test.tsx`

## Examples

### Component Implementation

```tsx
// Example component: Card.tsx
type CardProps = {
  title: string;
  description?: string;
  onClick?: () => void;
};

export const Card = ({ title, description, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

### Test Implementation

```tsx
// Example test: Card.test.tsx
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

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<Card title="Test Title" onClick={handleClick} />);
  fireEvent.click(screen.getByText("Test Title"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Instructions

1. Describe the component you want to create, including:

   - Component name
   - Props/parameters it should accept
   - Behavior and functionality
   - Any UI elements or styling considerations
   - Specific test cases you want to cover

2. Specify any additional dependencies or context needed.

## Prompts to Try

- "Create a Modal component that accepts title, content, and onClose props with tests for rendering and closing behavior"
- "Generate a Toggle component with tests for on/off states and toggling functionality"
- "Create a Dropdown component with multiple items that tests item selection and visibility"
- "Generate a Pagination component with tests for page navigation and boundary conditions"

---

_This project uses React 19, TypeScript, Vite, Vitest and React Testing Library._
