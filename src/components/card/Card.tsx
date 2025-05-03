import "./Card.css";

type CardProps = {
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
};

export const Card = ({
  title,
  description,
  onClick,
  className = "",
}: CardProps) => {
  const interactiveClass = onClick
    ? "card-interactive"
    : "card-non-interactive";

  return (
    <div
      className={`card ${interactiveClass} ${className}`}
      onClick={onClick}
      data-testid="card"
    >
      <h2 className="card-title">{title}</h2>
      {description && <p className="card-description">{description}</p>}
    </div>
  );
};
