import { ChangeEvent } from "react";
import "./Input.css";

type InputProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
};

export const Input = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  id,
  name,
  disabled = false,
  error,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="input-container" data-testid="input-container">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        aria-invalid={!!error}
        data-testid="input-field"
      />
      {error && (
        <div className="input-error" data-testid="input-error">
          {error}
        </div>
      )}
    </div>
  );
};
