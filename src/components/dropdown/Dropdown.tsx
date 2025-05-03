import { useState } from "react";
import "./Dropdown.css";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
};

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  disabled = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className="dropdown-container" data-testid="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <div
        className={`dropdown-select ${isOpen ? "open" : ""} ${
          disabled ? "disabled" : ""
        }`}
        onClick={handleToggle}
        data-testid="dropdown-select"
      >
        <div
          className="dropdown-selected-value"
          data-testid="dropdown-selected-value"
        >
          {displayText}
        </div>
        <div className="dropdown-arrow">▼</div>
      </div>
      {isOpen && !disabled && (
        <ul className="dropdown-options" data-testid="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-option ${
                option.value === value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option.value)}
              data-testid={`dropdown-option-${option.value}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
