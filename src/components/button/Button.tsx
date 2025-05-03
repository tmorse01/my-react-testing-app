import "./Button.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${
        disabled ? "button-disabled" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
